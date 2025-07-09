/**
 * ОСНОВНОЙ СКРИПТ САЙТА (оптимизированная версия)
 * Отвечает за:
 * 1. Плавный скролл по странице
 * 2. Переключение светлой/тёмной темы
 * 3. Работу галереи изображений
 * 4. Кнопки "Назад" на всех страницах
 * 5. Обработку специальных кнопок (например, "Схема проезда")
 */

document.addEventListener('DOMContentLoaded', function() {
    // ===== 0. ПРЕИНИЦИАЛИЗАЦИЯ =====
    const $ = selector => document.querySelector(selector);
    const $$ = selector => document.querySelectorAll(selector);
    
    // ===== 1. ПЛАВНЫЙ СКРОЛЛ =====
    $$('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = $(this.getAttribute('href'));
            target && window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // ===== 2. ПЕРЕКЛЮЧЕНИЕ ТЕМЫ =====
    const themeToggle = $('#themeToggle');
    if (themeToggle) {
        const savedTheme = localStorage.getItem('theme') || 'light';
        
        // Применяем сохранённую тему
        document.body.classList.toggle('dark-theme', savedTheme === 'dark');
        themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';

        // Обработчик клика
        themeToggle.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });
    }

    // ===== 3. ГАЛЕРЕЯ =====
    const initGallery = () => {
        // ... (ваш существующий код галереи остается без изменений)
    };

    // Инициализация галереи только при наличии
    $('.gallery') && initGallery();

    // ===== 4. КНОПКИ НАВИГАЦИИ =====
    $$('.back-button, .back-link').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            history.length > 1 ? history.back() : window.location.href = 'index.html';
        });
    });

    // ===== 5. ОСОБЫЕ КНОПКИ (например, "Схема проезда") =====
    $('a[href="location.htm"]')?.addEventListener('click', function(e) {
        // Можно добавить дополнительную логику перед переходом
        console.log('Переход на страницу схемы проезда');
        // e.preventDefault(); // Раскомментировать, если нужна AJAX-загрузка
    });

    // ===== 6. ПЛАВНОЕ ПОЯВЛЕНИЕ =====
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Изначально скрываем страницу
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease-in-out';