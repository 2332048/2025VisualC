// DOMの読み込みが完了してから実行
document.addEventListener('DOMContentLoaded', () => {

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('#nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 2. スクロール時のフェードインアニメーション
    // Intersection Observer APIを使用して、要素が画面に入ったらクラスを付与する
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // 10%見えたら発火
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // 一度表示されたら監視を終了
            }
        });
    }, observerOptions);

    // 監視対象の要素を登録
    document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
    });

});