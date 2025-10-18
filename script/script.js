    // ===== Config =====
    const STRUCT_JSON = '/assets/structure.json'; // contains sections + lessons

    // ===== State =====
    let SECTIONS = [];   // [{id,title,courses:[{id,title}]}]
    let LESSONS = [];    // [{id,course,title,url}]
    let CURRENT_COURSE = '';

    // ===== Elements =====
    const menuView = document.getElementById('menuView');
    const courseView = document.getElementById('courseView');
    const backToMenuBtn = document.getElementById('backToMenu');
    const courseTitleEl = document.getElementById('courseTitle');

    const listEl = document.getElementById('lessonList');
    const contentEl = document.getElementById('content');
    const titleEl = document.getElementById('currentTitle');
    const searchEl = document.getElementById('search');
    const copyBtn = document.getElementById('copyLink');
    const openRawBtn = document.getElementById('openRaw');

    // ===== Helpers =====
    const getCourseById = (id) => {
      for (const sec of SECTIONS) {
        const c = (sec.courses || []).find(x => x.id === id);
        if (c) return { section: sec, course: c };
      }
      return null;
    };

    const getLessonsByCourse = (courseId) => LESSONS.filter(l => l.course === courseId);
    const getLessonById = (id) => LESSONS.find(l => l.id === id);

    function parseHash(){
      // support #course=html&lesson=html
      const hash = location.hash.replace(/^#/, '');
      const params = new URLSearchParams(hash);
      const course = params.get('course') || '';
      const lesson = params.get('lesson') || '';
      return { course, lesson };
    }

    function setHash(obj){
      const p = new URLSearchParams(obj);
      location.hash = p.toString();
    }

    function showMenu(){
      CURRENT_COURSE = '';
      menuView.hidden = false;
      courseView.hidden = true;
      titleEl.textContent = 'از منو یک دوره انتخاب کنید…';
      contentEl.innerHTML = '';
    }

    function renderMenu(){
      // Build sections + courses UI
      menuView.innerHTML = '';
      SECTIONS.forEach(sec => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h3>${sec.title}</h3>`;
        const grid = document.createElement('div');
        grid.className = 'grid';
        (sec.courses || []).forEach(c => {
          const a = document.createElement('a');
          a.className = 'btn';
          a.textContent = c.title;
          a.href = `#course=${encodeURIComponent(c.id)}`;
          grid.appendChild(a);
        });
        card.appendChild(grid);
        menuView.appendChild(card);
      });
    }

    function showCourse(courseId){
      const found = getCourseById(courseId);
      if(!found){ showMenu(); return; }
      CURRENT_COURSE = courseId;
      menuView.hidden = true;
      courseView.hidden = false;
      courseTitleEl.textContent = `${found.section.title} / ${found.course.title}`;
      renderLessonList(courseId);
    }

    function renderLessonList(courseId){
      const lessons = getLessonsByCourse(courseId);
      listEl.innerHTML = '';
      lessons.forEach(item => {
        const li = document.createElement('li');
        li.className = 'lesson-item';
        const a = document.createElement('a');
        a.href = `#course=${encodeURIComponent(courseId)}&lesson=${encodeURIComponent(item.id)}`;
        a.textContent = item.title || item.id;
        li.appendChild(a);
        listEl.appendChild(li);
      });
    }

    async function renderMarkdown(url){
      contentEl.innerHTML = '<p class="muted">در حال بارگذاری…</p>';
      try{
        const res = await fetch(url, { cache: 'no-store' });
        if(!res.ok) throw new Error('خطا در دریافت فایل');
        const md = await res.text();
        const rawHtml = marked.parse(md, { mangle: false, headerIds: true });
        const safe = DOMPurify.sanitize(rawHtml, { USE_PROFILES: { html: true } });
        contentEl.innerHTML = safe;
        contentEl.scrollTop = 0;
      } catch(err){
        contentEl.innerHTML = `<p style="color:#ff8a8a">⚠️ ${err.message}</p>`;
      }
    }

    async function showLesson(lessonId){
      const lesson = getLessonById(lessonId);
      if(!lesson){ return; }
      const courseInfo = getCourseById(lesson.course);
      if(courseInfo){
        titleEl.textContent = `${courseInfo.course.title} — ${lesson.title}`;
      } else {
        titleEl.textContent = lesson.title;
      }
      openRawBtn.onclick = () => window.open(lesson.url, '_blank');
      copyBtn.onclick = async () => {
        const link = `${location.origin}${location.pathname}#course=${encodeURIComponent(lesson.course)}&lesson=${encodeURIComponent(lesson.id)}`;
        try { await navigator.clipboard.writeText(link); copyBtn.textContent = 'کپی شد'; setTimeout(()=>copyBtn.textContent='کپی لینک',1200); } catch {}
      };
      await renderMarkdown(lesson.url);
    }

    function applySearch(){
      const q = (searchEl.value || '').toLowerCase().trim();
      if(!q){
        // No filter → re-render current view
        const {course, lesson} = parseHash();
        if(course) renderLessonList(course);
        else renderMenu();
        return;
      }
      // Filter courses and lessons by query (client-side)
      if(CURRENT_COURSE){
        const ls = getLessonsByCourse(CURRENT_COURSE).filter(l => (l.title||'').toLowerCase().includes(q) || (l.id||'').toLowerCase().includes(q));
        listEl.innerHTML = '';
        ls.forEach(item => {
          const li = document.createElement('li');
          li.className = 'lesson-item';
          const a = document.createElement('a');
          a.href = `#course=${encodeURIComponent(CURRENT_COURSE)}&lesson=${encodeURIComponent(item.id)}`;
          a.textContent = item.title || item.id;
          listEl.appendChild(li).appendChild(a);
        });
      } else {
        // Filter menu (courses)
        menuView.innerHTML = '';
        SECTIONS.forEach(sec => {
          const filteredCourses = (sec.courses || []).filter(c => (c.title||'').toLowerCase().includes(q) || (c.id||'').toLowerCase().includes(q));
          if(!filteredCourses.length) return;
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `<h3>${sec.title}</h3>`;
          const grid = document.createElement('div');
          grid.className = 'grid';
          filteredCourses.forEach(c => {
            const a = document.createElement('a');
            a.className = 'btn';
            a.textContent = c.title;
            a.href = `#course=${encodeURIComponent(c.id)}`;
            grid.appendChild(a);
          });
          card.appendChild(grid);
          menuView.appendChild(card);
        });
      }
    }

    // ===== Init =====
    async function init(){
      try{
        const res = await fetch(STRUCT_JSON, { cache: 'no-store' });
        if(!res.ok) throw new Error('نتوانستم ساختار منو را بخوانم.');
        const data = await res.json();
        SECTIONS = data.sections || [];
        LESSONS = data.lessons || [];
      } catch(err){
        document.getElementById('currentTitle').textContent = 'خطا در بارگذاری';
        document.getElementById('content').innerHTML = `<p style="color:#ff8a8a">${err.message}</p>`;
        return;
      }

      renderMenu();
      showMenu();

      const { course, lesson } = parseHash();
      if(course){ showCourse(course); }
      if(lesson){ await showLesson(lesson); }

      backToMenuBtn.addEventListener('click', () => { setHash({}); showMenu(); renderMenu(); });
      window.addEventListener('hashchange', () => {
        const { course, lesson } = parseHash();
        if(!course){ showMenu(); renderMenu(); return; }
        showCourse(course);
        if(lesson) showLesson(lesson);
        else { titleEl.textContent = 'یک درس را انتخاب کنید…'; contentEl.innerHTML = ''; }
      });

      searchEl.addEventListener('input', applySearch);
    }

    init();