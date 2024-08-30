// Hãy xây dựng một ứng dụng thăm dò ý kiến đơn giản! Một cuộc thăm dò có một câu hỏi, một mảng các tùy
// chọn mà mọi người có thể chọn, và một mảng với số lượng câu trả lời cho mỗi tùy chọn. Dữ liệu này
// được lưu trữ trong đối tượng 'poll' khởi đầu dưới đây.

// Nhiệm vụ của bạn:

// 1. Tạo một phương thức gọi là 'registerNewAnswer' trên đối tượng 'poll'. Phương thức này làm 2 việc: 
// 1.1. Hiển thị một cửa sổ prompt để người dùng nhập số của tùy chọn đã chọn. Prompt nên trông như thế này:

// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)

// 1.2. Dựa trên số đầu vào, cập nhật thuộc tính mảng 'answers'. Ví dụ, nếu tùy chọn là 3, tăng giá trị
// tại vị trí 3 của mảng lên 1. Đảm bảo kiểm tra xem đầu vào có phải là số và số đó có hợp lý không
// (ví dụ, câu trả lời 52 sẽ không hợp lý, đúng không?).
// 2. Gọi phương thức này bất cứ khi nào người dùng nhấp vào nút "Answer poll".
// 3. Tạo một phương thức 'displayResults' hiển thị kết quả thăm dò. Phương thức này nhận một chuỗi làm 
// đầu vào (gọi là 'type'), có thể là 'string' hoặc 'array'. Nếu type là 'array', chỉ cần hiển thị 
// mảng kết quả như nó là, sử dụng console.log(). Đây nên là tùy chọn mặc định. Nếu type là 'string',
// hiển thị một chuỗi như "Poll results are 13, 2, 4, 1".
// 4. Chạy phương thức 'displayResults' vào cuối mỗi lần gọi phương thức 'registerNewAnswer'.
// 5. Bonus: Sử dụng phương thức 'displayResults' để hiển thị 2 mảng trong dữ liệu kiểm tra. Sử dụng cả 
// tùy chọn 'array' và 'string'. Không đặt các mảng trong đối tượng poll! Vậy từ khóa this nên trông 
// như thế nào trong tình huống này?
// Dữ liệu kiểm tra cho bonus:
// Dữ liệu 1: [5, 2, 3]
// Dữ liệu 2: [1, 5, 3, 9, 6, 1]

// Đối tượng 'poll' khởi đầu:
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),

    // 1. Tạo phương thức 'registerNewAnswer'
    registerNewAnswer () {
        // 1.1 Hiển thị cửa sổ prompt
        const answer = Number (
            prompt(
                `${this.question}\n${this.options.join('\n')}\n(Write option number)`
            )
        );

        // 1.2 Cập nhật mảng 'answers'
        if (typeof answer === 'number' && answer < this.answers.length) {
            this.answers[answer]++;
        } else {
            alert('Invalid answer! Please try again.');
        }

        // 4. Chạy phương thức 'displayResults'
        this.displayResults();
        this.displayResults('string');

    },

    // 3. Tạo phương thức 'displayResults'
    displayResults (type = 'array') {
        if (type == 'array') {
            console.log (this.answers);
        } else if (type == 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }
}
// 2. Gọi phương thức 'registerNewAnswer' khi người dùng nhấp vào nút "Answer poll"
document.getElementById('pollButton').addEventListener('click', poll.registerNewAnswer.bind(poll));


// 5. Bonus: sử dụng phương thức 'displayResults' để hiển thị 2 mảng trong dữ liệu kiểm tra
poll.displayResults.call({answers: [5, 2, 3]}, 'array');
poll.displayResults.call({answers: [5, 2, 3]}, 'string');

poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, 'array');
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, 'string');



