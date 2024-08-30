// Đây là một thử thách tư duy hơn là một thử thách mã hóa.

// Nhiệm vụ của bạn:

// 1. Lấy IIFE (Immediately Invoked Function Expression) dưới đây và ở cuối hàm, gắn một trình lắng nghe 
// sự kiện thay đổi màu của phần tử h1 đã chọn ('header') thành màu xanh dương, mỗi khi phần tử body 
// được nhấp vào. Không chọn lại phần tử h1!
// 2. Và bây giờ hãy tự giải thích (hoặc giải thích cho ai đó xung quanh bạn) tại sao điều này hoạt động!
// Hãy dành tất cả thời gian bạn cần. Hãy nghĩ về thời điểm chính xác hàm callback được thực thi và
// điều đó có ý nghĩa gì đối với các biến liên quan trong ví dụ này.

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    });
})();

// Note:
// 1. Tạo IIFE: Định nghĩa và gọi hàm ngay lập tức.
// 2. Chọn phần tử h1: Sử dụng document.querySelector để chọn phần tử h1 và lưu trữ nó trong biến header.
// 3. Thay đổi màu của h1: Đặt màu của h1 thành màu đỏ.
// 4. Gắn trình lắng nghe sự kiện: Gắn trình lắng nghe sự kiện vào phần tử body để thay đổi màu của h1
// thành màu xanh dương mỗi khi phần tử body được nhấp vào.