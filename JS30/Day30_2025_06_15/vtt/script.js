let currentIndex = 0;
const slides = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
const totalSlides = slideElements.length;

function showSlide(index) {
  // Di chuyển đến slide tương ứng
  slides.style.transform = `translateX(-${index * 100}vw)`;

  // Ẩn tất cả nội dung slide và reset animation
  document.querySelectorAll('.slide-content').forEach(el => {
    el.classList.remove('animate');
    el.style.opacity = '0';
    el.style.animation = 'none'; // reset animation để chạy lại
  });

  // Hiển thị nội dung slide hiện tại với hiệu ứng sau khi ảnh chuyển xong
  const currentSlideContent = slideElements[index].querySelector('.slide-content');
  if (currentSlideContent) {
    setTimeout(() => {
      currentSlideContent.style.animation = ''; // khởi động lại animation
      currentSlideContent.classList.add('animate');
    }, 1500); // Delay đúng bằng thời gian transition của ảnh (1.5s)
  }
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Tự động chuyển slide sau 5 giây
setInterval(nextSlide, 5000);

// Gọi khi trang đã load xong
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentIndex);
});
