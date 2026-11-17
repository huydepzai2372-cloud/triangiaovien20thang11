export type Teacher = {
  id: string;
  slug: string;
  name: string;
  role: string;
  department:
    | 'Ban Giám hiệu'
    | 'Toán'
    | 'Toán · Khoa Học Tự Nhiên'
    | 'Ngữ Văn'
    | 'Ngoại Ngữ'
    | 'Khoa Học Tự Nhiên'
    | 'Giáo Viên Chủ Nhiệm'
    | 'Lịch sử và Địa lý'
    | 'Tin học';
  quote: string;
  message: string;
};

export const teachers: Teacher[] = [
  {
    id: 'pham-thi-ngoc-tan',
    slug: 'pham-thi-ngoc-tan',
    name: 'Cô Phạm Thị Ngọc Tân',
    role: 'Hiệu trưởng',
    department: 'Ban Giám hiệu',
    quote: 'Mỗi học trò đều có một cách riêng để tỏa sáng.',
    message:
      'Nhân ngày 20/11, em xin kính chúc cô thật nhiều sức khỏe và niềm vui. Cảm ơn cô đã luôn tận tâm dẫn dắt nhà trường, tạo nên một môi trường nơi chúng em được học tập, trưởng thành và tự tin theo đuổi ước mơ.',
  },
  {
    id: 'nguyen-the-tuc',
    slug: 'nguyen-the-tuc',
    name: 'Thầy Nguyễn Thế Túc',
    role: 'Phó Hiệu trưởng',
    department: 'Ban Giám hiệu',
    quote: 'Một lời động viên đúng lúc có thể nâng bước cả chặng đường.',
    message:
      'Kính chúc cô một ngày Nhà giáo Việt Nam ấm áp và trọn vẹn. Chúng em biết ơn sự quan tâm, lắng nghe và những lời động viên của cô; nhờ đó, mỗi ngày đến trường đều có thêm niềm tin và động lực.',
  },
  {
    id: 'bui-van-cuong',
    slug: 'bui-van-cuong',
    name: 'Thầy Bùi Văn Cương',
    role: 'Giáo viên bộ môn Toán và Vật lý',
    department: 'Toán · Khoa Học Tự Nhiên',
    quote: 'Tò mò mở ra khám phá; kiên nhẫn giúp ta tìm thấy lời giải.',
    message:
      'Cảm ơn thầy đã giúp những bài toán khó trở nên gần gũi, đồng thời khơi gợi trong chúng em sự tò mò trước những hiện tượng vật lý quanh mình. Sự tận tình và kiên nhẫn của thầy khiến mỗi giờ học trở thành một hành trình khám phá thú vị. Kính chúc thầy luôn mạnh khỏe, giữ mãi niềm vui với nghề và tiếp tục truyền cho chúng em tình yêu học hỏi.',
  },
  {
    id: 'bui-van-tan',
    slug: 'bui-van-tan',
    name: 'Thầy Bùi Văn Tân',
    role: 'Giáo viên bộ môn Toán',
    department: 'Toán',
    quote: 'Cứ thử, cứ sai, rồi mình sẽ tìm ra cách tốt hơn.',
    message:
      'Nhân ngày 20/11, chúng em gửi đến cô lời cảm ơn chân thành. Cô không chỉ dạy chúng em sử dụng công nghệ mà còn khuyến khích chúng em tò mò, sáng tạo và bền bỉ tìm lời giải cho những điều chưa biết.',
  },
  {
    id: 'bui-thi-bang',
    slug: 'bui-thi-bang',
    name: 'Cô Bùi Thị Băng',
    role: 'Giáo viên Ngữ văn',
    department: 'Ngữ Văn',
    quote: 'Đọc một trang sách là mở thêm một ô cửa tâm hồn.',
    message:
      'Cảm ơn cô đã đưa chúng em đi qua những trang văn bằng sự dịu dàng và sâu sắc. Những bài học của cô giúp chúng em biết lắng nghe, biết yêu thương và tìm thấy tiếng nói của mình. Kính chúc cô một ngày 20/11 thật nhiều niềm vui.',
  },
  {
    id: 'nguyen-thi-huong',
    slug: 'nguyen-thi-huong',
    name: 'Cô Nguyễn Thị Hương',
    role: 'Giáo viên Tiếng Anh',
    department: 'Ngoại Ngữ',
    quote: 'Mỗi ngôn ngữ mới là một thế giới mới đang chờ.',
    message:
      'Chúng em cảm ơn cô vì những giờ học đầy khích lệ, nơi chúng em được tự tin cất lời và không ngại mắc lỗi. Kính chúc cô luôn mạnh khỏe, hạnh phúc và giữ mãi nguồn năng lượng tích cực trong mỗi bài giảng.',
  },
  {
    id: 'nguyen-thi-hong-thoan',
    slug: 'nguyen-thi-hong-thoan',
    name: 'Cô Nguyễn Thị Hồng Thoan',
    role: 'Giáo viên Sinh học',
    department: 'Khoa Học Tự Nhiên',
    quote: 'Hiểu thiên nhiên là học cách trân trọng sự sống.',
    message:
      'Cảm ơn cô đã khơi gợi trong chúng em niềm say mê tìm hiểu thế giới tự nhiên và sự trân trọng đối với từng điều nhỏ bé quanh mình. Nhân ngày Nhà giáo Việt Nam, kính chúc cô luôn an vui và có thật nhiều khoảnh khắc đáng nhớ bên học trò.',
  },
  {
    id: 'ly-thi-mai',
    slug: 'ly-thi-mai',
    name: 'Cô Lý Thị Mai',
    role: 'Địa lý',
    department: 'Lịch sử và Địa lý',
    quote: 'Hiểu những câu chuyện đã qua để sống tốt hơn hôm nay.',
    message:
      'Cảm ơn cô đã giúp chúng em hiểu thêm về con người, quê hương và những câu chuyện làm nên thế giới hôm nay. Kính chúc cô luôn mạnh khỏe, hạnh phúc và tiếp tục đồng hành cùng chúng em trên hành trình học hỏi.',
  },
  { 
    id: 'ta-thuy-duong',
    slug: 'ta-thuy-duong',
    name: 'Cô Tạ Thùy Dương',
    role: 'Hóa học',
    department: 'Khoa Học Tự Nhiên',
    quote: 'Hiểu thiên nhiên là học cách trân trọng sự sống.',
    message:
      'Cảm ơn cô đã khơi gợi trong chúng em niềm say mê tìm hiểu thế giới tự nhiên và sự trân trọng đối với từng điều nhỏ bé quanh mình. Nhân ngày Nhà giáo Việt Nam, kính chúc cô luôn an vui và có thật nhiều khoảnh khắc đáng nhớ bên học trò.',
  },
  {
    id: 'nguyen-thi-thao',
    slug: 'nguyen-thi-thao',
    name: 'Cô Nguyễn Thị Thảo',
    role: 'Lịch sử',
    department: 'Lịch sử và Địa lý',
    quote: 'Hiểu những câu chuyện đã qua để sống tốt hơn hôm nay.',
    message:
      'Cảm ơn cô đã giúp chúng em hiểu thêm về con người, quê hương và những câu chuyện làm nên thế giới hôm nay. Kính chúc cô luôn mạnh khỏe, hạnh phúc và tiếp tục đồng hành cùng chúng em trên hành trình học hỏi.',
  },
  {
    id: 'bui-van-manh',
    slug: 'bui-van-manh',
    name: 'Thầy Bùi Văn Mạnh',
    role: 'Tin học',
    department: 'Tin học',
    quote: 'Công nghệ là công cụ, nhưng con người mới là chủ thể.',
    message:
      'Cảm ơn thầy đã truyền cảm hứng và kiến thức về tin học cho chúng em. Kính chúc thầy luôn mạnh khỏe, hạnh phúc và tiếp tục đồng hành cùng chúng em trên hành trình khám phá thế giới số.',
  },
];
