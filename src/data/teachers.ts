export type Teacher = {
  id: string;
  slug: string;
  name: string;
  role: string;
  department:
    | 'Ban Giám hiệu'
    | 'Tổ Toán - Tin - Công nghệ'
    | 'Tổ Khoa học tự nhiên'
    | 'Tổ Khoa học xã hội'
    | 'Tổ Ngoại ngữ'
    | 'Giáo viên THCS'
    | 'Khối Tiểu học'
    | 'Nghệ thuật'
    | 'Công nghệ - Tổng phụ trách Đội'
    | 'Văn phòng - Hội đồng'
    | 'Kế toán - Thủ quỹ'
    | 'Y tế học đường'
    | 'Phục vụ'
    | 'Văn thư'
    | 'Khối Tiểu học & Y tế học đường'
    | 'Tổ Khoa học xã hội & Khối Tiểu học';
  quote: string;
  message: string;
};

const teacherProfiles: Teacher[] = [
  {
    id: 'pham-thi-ngoc-tan',
    slug: 'pham-thi-ngoc-tan',
    name: 'Cô Phạm Thị Ngọc Tân',
    role: 'Hiệu trưởng',
    department: 'Ban Giám hiệu',
    quote: 'Một ngôi trường lớn lên từ sự tận tâm và tầm nhìn của người dẫn lối.',
    message:
      '',
  },
  {
    id: 'nguyen-the-tuc',
    slug: 'nguyen-the-tuc',
    name: 'Thầy Nguyễn Thế Túc',
    role: 'Phó Hiệu trưởng',
    department: 'Ban Giám hiệu',
    quote: 'Sự lắng nghe chân thành khiến mọi nỗ lực được tiếp thêm sức mạnh.',
    message:
      '',
  },
  {
    id: 'bui-van-cuong',
    slug: 'bui-van-cuong',
    name: 'Thầy Bùi Văn Cương',
    role: 'Giáo viên; Tổ phó tổ Toán - Tin - Công nghệ',
    department: 'Tổ Toán - Tin - Công nghệ',
    quote: 'Một bài toán hay mở ra nhiều cách nghĩ mới.',
    message:
      '',
  },
  {
    id: 'bui-van-tan',
    slug: 'bui-van-tan',
    name: 'Thầy Bùi Văn Tân',
    role: 'Giáo viên chủ nhiệm; Tổ trưởng khối KHTN',
    department: 'Tổ Khoa học tự nhiên',
    quote: 'Thiên nhiên là cuốn sách mở ra cho những ai biết quan sát.',
    message:
      '',
  },
  {
    id: 'bui-thi-bang-bgh',
    slug: 'bui-thi-bang-bgh',
    name: 'Cô Bùi Thị Băng',
    role: 'Giáo viên THCS',
    department: 'Giáo viên THCS',
    quote: 'Mỗi giờ học là một cơ hội để hiểu mình và hiểu người hơn.',
    message:
      '',
  },
  {
    id: 'nguyen-thi-huong',
    slug: 'nguyen-thi-huong',
    name: 'Cô Nguyễn Thị Hương',
    role: 'Giáo viên Tiếng Anh',
    department: 'Tổ Ngoại ngữ',
    quote: 'Mỗi lời nói tự tin có thể mở một cánh cửa mới.',
    message:
      '',
  },
  {
    id: 'nguyen-thi-hong-thoan',
    slug: 'nguyen-thi-hong-thoan',
    name: 'Cô Nguyễn Thị Hồng Thoan',
    role: 'Giáo viên chủ nhiệm',
    department: 'Giáo viên THCS',
    quote: 'Một tập thể ấm áp bắt đầu từ sự quan tâm mỗi ngày.',
    message:
      '',
  },
  {
    id: 'ly-thi-mai',
    slug: 'ly-thi-mai',
    name: 'Cô Lý Thị Mai',
    role: 'Giáo viên; Tổ phó khối KHTN',
    department: 'Tổ Khoa học tự nhiên',
    quote: 'Quan sát kỹ hôm nay để hiểu thêm thế giới quanh mình.',
    message:
      '',
  },
  { 
    id: 'ta-thuy-duong',
    slug: 'ta-thuy-duong',
    name: 'Cô Tạ Thùy Dương',
    role: 'Giáo viên chủ nhiệm; Thư ký tổ Lý - Hóa - Sinh và tổ chủ nhiệm; Phó Bí thư Đoàn Thanh niên',
    department: 'Tổ Khoa học tự nhiên',
    quote: 'Sự tận tâm đôi khi được gửi gắm trong những việc rất lặng thầm.',
    message:
      '',
  },
  {
    id: 'nguyen-thi-thao-thcs',
    slug: 'nguyen-thi-thao-thcs',
    name: 'Cô Nguyễn Thị Thảo',
    role: 'Giáo viên THCS; Giáo viên cốt cán môn Lịch sử cấp tỉnh',
    department: 'Tổ Khoa học xã hội',
    quote: 'Tìm hiểu quá khứ giúp ta nhìn hiện tại sâu sắc hơn.',
    message:
      '',
  },
  {
    id: 'nguyen-thi-thao-tieu-hoc',
    slug: 'nguyen-thi-thao-tieu-hoc',
    name: 'Cô Nguyễn Thị Thảo',
    role: 'Giáo viên tiểu học; Giáo viên chủ nhiệm; Tổ phó tổ 4 - 5',
    department: 'Khối Tiểu học',
    quote: 'Sự khích lệ đúng lúc giúp mỗi học trò thêm tự tin.',
    message:
      '',
  },
  {
    id: 'bui-van-manh',
    slug: 'bui-van-manh',
    name: 'Thầy Bùi Văn Mạnh',
    role: 'Giáo viên chủ nhiệm; Phụ trách CSDL, hồ sơ điện tử và công tác PCGD khối THCS',
    department: 'Tổ Toán - Tin - Công nghệ',
    quote: 'Tri thức số có ý nghĩa khi được dùng để phục vụ mọi người.',
    message:
      '',
  },
  {
    id: 'nguyen-hong-khanh',
    slug: 'nguyen-hong-khanh',
    name: 'Thầy Nguyễn Hồng Khánh',
    role: 'Giáo viên',
    department: 'Giáo viên THCS',
    quote: 'Một câu hỏi đúng có thể bắt đầu cả hành trình học tập.',
    message: 
     '',
  },
  {
    id: 'pham-thi-dung',
    slug: 'pham-thi-dung',
    name: 'Cô Phạm Thị Dung',
    role: 'Giáo viên',
    department: 'Giáo viên THCS',
    quote: 'Sự dịu dàng của người cô có thể làm ngày học nhẹ nhàng hơn.',
    message:
      '',
  },
  {
    id: 'bach-thi-bich-ngoc',
    slug: 'bach-thi-bich-ngoc',
    name: 'Cô Bạch Thị Bích Ngọc',
    role: 'Giáo viên Tiếng Anh',
    department: 'Tổ Ngoại ngữ',
    quote: 'Ngoại ngữ là nhịp cầu nối những con người khác biệt.',
    message:
      '',
  },
  {
    id: 'bui-thi-bang',
    slug: 'bui-thi-bang',
    name: 'Cô Bùi Thị Bằng',
    role: 'Phó Hiệu trưởng; Phụ trách lao động; Giáo viên; Tư vấn tâm lý học đường',
    department: 'Ban Giám hiệu',
    quote: 'Lãnh đạo bằng trách nhiệm là âm thầm nâng đỡ cả tập thể.',
    message:
      '',
  },
  {
    id: 'tran-thi-hang',
    slug: 'tran-thi-hang',
    name: 'Cô Trần Thị Hằng',
    role: 'Giáo viên chủ nhiệm',
    department: 'Giáo viên THCS',
    quote: 'Một lớp học tốt được vun đắp bằng sự tin tưởng mỗi ngày.',
    message:
      '',
  },
  {
    id: 'bui-thi-dien',
    slug: 'bui-thi-dien',
    name: 'Cô Bùi Thị Diện',
    role: 'Giáo viên chủ nhiệm',
    department: 'Giáo viên THCS',
    quote: 'Từng bước tiến nhỏ cũng đáng được ghi nhận và khích lệ.',
    message:
      '',
  },
  {
    id: 'nguyen-thi-yen',
    slug: 'nguyen-thi-yen',
    name: 'Cô Nguyễn Thị Yến',
    role: 'Giáo viên',
    department: 'Giáo viên THCS',
    quote: 'Cô gieo lòng ham học bằng những điều giản dị quanh ta.',
    message:
      '',
  },
  {
    id: 'bui-thi-thao',
    slug: 'bui-thi-thao',
    name: 'Cô Bùi Thị Thảo',
    role: 'Giáo viên chủ nhiệm; Tổ phó khối 1 - 2 - 3',
    department: 'Khối Tiểu học',
    quote: 'Tuổi thơ thêm đẹp khi lớp học có một người cô tận tụy.',
    message:
      '',
  },
  {
    id: 'phi-thi-huyen',
    slug: 'phi-thi-huyen',
    name: 'Cô Phí Thị Huyền',
    role: 'Giáo viên chủ nhiệm',
    department: 'Khối Tiểu học',
    quote: 'Một lời động viên dịu dàng giúp em nhỏ thêm can đảm.',
    message:
      '',
  },
  {
    id: 'bui-thi-ha-chi',
    slug: 'bui-thi-ha-chi',
    name: 'Cô Bùi Thị Hà Chi',
    role: 'Giáo viên chủ nhiệm',
    department: 'Khối Tiểu học',
    quote: 'Nền nếp đầu đời bắt đầu từ tình thương và sự bền lòng.',
    message:
      '',
  },
  {
    id: 'bui-thi-thanh',
    slug: 'bui-thi-thanh',
    name: 'Cô Bùi Thị Thanh',
    role: 'Giáo viên chủ nhiệm; Tổ trưởng khối 1 - 2 - 3',
    department: 'Khối Tiểu học',
    quote: 'Một tập thể vững vàng được xây từ những việc nhỏ làm cùng nhau.',
    message:
      '',
  },
  {
    id: 'vu-thi-kim-phuong',
    slug: 'vu-thi-kim-phuong',
    name: 'Cô Vũ Thị Kim Phượng',
    role: 'Giáo viên tiểu học',
    department: 'Khối Tiểu học',
    quote: 'Những năm tháng tiểu học là hành trang quý cho chặng đường dài.',
    message:
      '',
  },
  {
    id: 'nguyen-hong-nam',
    slug: 'nguyen-hong-nam',
    name: 'Thầy Nguyễn Hồng Nam',
    role: 'Giáo viên chủ nhiệm; Tổ phó khối 4 - 5',
    department: 'Khối Tiểu học',
    quote: 'Sự đồng hành tận tâm giúp lớp học luôn tiến về phía trước.',
    message:
      '',
  },
  {
    id: 'pham-thi-van',
    slug: 'pham-thi-van',
    name: 'Cô Phạm Thị Vân',
    role: 'Giáo viên chủ nhiệm; Tổ trưởng khối 4 - 5',
    department: 'Khối Tiểu học',
    quote: 'Người cô tận tụy giúp mỗi em nhỏ tin vào khả năng của mình.',
    message:
      '',
  },
  {
    id: 'bui-thi-mo',
    slug: 'bui-thi-mo',
    name: 'Cô Bùi Thị Mơ',
    role: 'Giáo viên chủ nhiệm; Nhân viên y tế',
    department: 'Khối Tiểu học & Y tế học đường',
    quote: 'Sự kiên nhẫn hôm nay sẽ hóa thành tự tin ngày mai.',
    message:
      '',
  },
  {
    id: 'dinh-thi-thu-huyen',
    slug: 'dinh-thi-thu-huyen',
    name: 'Cô Đinh Thị Thu Huyền',
    role: 'Giáo viên Mĩ thuật khối 1 - 2; Giáo viên Âm nhạc khối 1 - 9',
    department: 'Nghệ thuật',
    quote: 'Màu sắc và âm thanh làm giàu trí tưởng tượng của tuổi thơ.',
    message:
      '',
  },
  {
    id: 'bui-thi-thoa',
    slug: 'bui-thi-thoa',
    name: 'Cô Bùi Thị Thoa',
    role: 'Giáo viên; Thư ký Hội đồng nhà trường',
    department: 'Văn phòng - Hội đồng',
    quote: 'Sự chu đáo trong từng việc nhỏ tạo nên một hội đồng gắn kết.',
    message:
      '',
  },
  {
    id: 'nguyen-khanh-toan',
    slug: 'nguyen-khanh-toan',
    name: 'Thầy Nguyễn Khánh Toàn',
    role: 'Giáo viên Công nghệ khối 3 - 5; Tổng phụ trách Đội',
    department: 'Công nghệ - Tổng phụ trách Đội',
    quote: 'Người anh phụ trách Đội thắp lên tinh thần kỷ luật và sẻ chia.',
    message:
      '',
  },
  {
    id: 'dao-kim-lien',
    slug: 'dao-kim-lien',
    name: 'Cô Đào Kim Liên',
    role: 'Giáo viên chủ nhiệm',
    department: 'Khối Tiểu học',
    quote: 'Bước vào lớp học đầu tiên, em cần một bàn tay dịu dàng dẫn đường.',
    message:
      '',
  },
  {
    id: 'bach-thi-thuy',
    slug: 'bach-thi-thuy',
    name: 'Cô Bạch Thị Thủy',
    role: 'Kế toán',
    department: 'Kế toán - Thủ quỹ',
    quote: 'Sự chính xác và tận tâm giữ cho công việc chung luôn vững vàng.',
    message:
      '',
  },
  {
    id: 'le-vinh-ha',
    slug: 'le-vinh-ha',
    name: 'Thầy Lê Vĩnh Hà',
    role: 'Kế toán; Thủ quỹ',
    department: 'Kế toán - Thủ quỹ',
    quote: 'Từng khoản thu chi rõ ràng là nền nếp đáng quý của tập thể.',
    message:
      '',
  },
  {
    id: 'quach-thi-thu-hien',
    slug: 'quach-thi-thu-hien',
    name: 'Cô Quách Thị Thu Hiền',
    role: 'Nhân viên phục vụ',
    department: 'Phục vụ',
    quote: 'Một ngôi trường sạch đẹp được gìn giữ bằng sự tận tụy mỗi ngày.',
    message:
      '',
  },
  {
    id: 'bach-mai-tho',
    slug: 'bach-mai-tho',
    name: 'Chú Bạch Mai Thọ',
    role: 'Nhân viên văn thư',
    department: 'Văn thư',
    quote: 'Những trang giấy ngăn nắp lưu giữ nhịp điệu của mái trường.',
    message:
      '',
  },
  {
    id: 'ha-quang-hiep',
    slug: 'ha-quang-hiep',
    name: 'Thầy Hà Quang Hiệp',
    role: 'Giáo viên',
    department: 'Giáo viên THCS',
    quote: 'Tiếng chuông rung lên, ý chí học tập cũng theo đó mà lớn dần.',
    message:
      '',
  }
];

const personalMessages: Record<string, string> = {
  'pham-thi-ngoc-tan': 'Kính gửi cô Phạm Thị Ngọc Tân, nhân Ngày Nhà giáo Việt Nam 20/11, chúng em xin trân trọng bày tỏ lòng biết ơn sâu sắc đối với tầm nhìn và sự tận tâm của cô trong công tác Hiệu trưởng. Cô luôn nhìn nhận nhà trường như một cộng đồng nơi mỗi học sinh đều xứng đáng được an toàn, được lắng nghe và được trao cơ hội để trưởng thành. Những quyết sách của cô không chỉ giữ cho hoạt động chung vận hành ổn định mà còn vun đắp môi trường nhân ái, kỷ cương và giàu khát vọng. Cô yêu cầu sự chuyên cần, nhưng luôn nhớ rằng sau từng lớp, từng học sinh là những mơ ước và câu chuyện riêng cần được trân trọng. Chúng em biết ơn vì cô tạo điều kiện để thầy cô yên tâm cống hiến và học trò mạnh dạn theo đuổi những điều tốt đẹp. Tấm gương của cô dạy chúng em rằng một người lãnh đạo chân chính cần có trí tuệ, bản lĩnh và lòng bao dung đồng thời. Kính chúc cô sức khỏe dồi dào, hạnh phúc bình yên và luôn giữ niềm tin vững vàng để tiếp tục dẫn dắt mái trường.',
  'nguyen-the-tuc': 'Kính gửi thầy Nguyễn Thế Túc, nhân ngày 20/11, chúng em xin ghi nhận công lao và sự chu đáo của thầy trong vai trò Phó Hiệu trưởng. Thầy luôn lắng nghe, cân nhắc kỹ lưỡng và lựa chọn cách hỗ trợ phù hợp để công việc dạy học được tiến hành trọn vẹn. Sự bình tĩnh của thầy trong những tình huống khó khăn giúp thầy cô và học sinh thêm tin tưởng, không nóng vội mà vẫn kiên quyết làm điều đúng. Thầy không chỉ chú trọng kết quả mà còn quan tâm đến cách mà mỗi tập thể cùng nhau hoàn thành trách nhiệm. Chúng em biết ơn những lần thầy động viên, nhắc nhở và đem lại sức mạnh tinh thần đúng lúc cho nhà trường. Tấm gương của thầy dạy chúng em rằng lãnh đạo bằng lương tâm, công bằng và sự lắng nghe luôn tạo ra sức lan tỏa bền lâu. Kính chúc thầy luôn khỏe mạnh, vui vẻ, thành công trong công tác điều hành và được nhiều người yêu mến.',
  'bui-van-cuong': 'Thưa thầy Bùi Văn Cương, nhân Ngày Nhà giáo Việt Nam, chúng em xin gửi lời cảm tạ vì những giờ Toán đầy thách thức và ý nghĩa do thầy dẫn dắt. Thầy có cách biến bài toán phức tạp thành từng bước suy luận gần gũi, để chúng em hiểu vì sao mình làm như vậy chứ không chỉ tìm đáp án. Sự kiên nhẫn của thầy giúp chúng em dám thử, dám sai và bình tĩnh xem lại lập luận thay vì nản lòng. Với vai trò Tổ phó, thầy còn kết nối đồng nghiệp, chia sẻ kinh nghiệm và giúp tổ chuyên môn hoạt động nghiêm túc, sáng tạo. Chúng em học được rằng tư duy tốt bắt nguồn từ việc đặt câu hỏi, quan sát kỹ và kiên trì kiểm chứng. Chính thái độ cẩn trọng, công bằng của thầy đã làm lớp học trở nên đáng tin cậy và tràn đầy động lực. Kính chúc thầy mãi vui với nghề, mạnh khỏe và tiếp tục khơi dậy trí tò mò của nhiều thế hệ học trò.',
  'bui-van-tan': 'Kính gửi thầy Bùi Văn Tân, nhân ngày 20/11, chúng em xin chân thành cảm ơn những giờ học thầy mang đến cho chúng em nhiều điều vừa thú vị vừa có ý nghĩa. Thầy quan sát từng học sinh, biết khi nào cần gợi mở và khi nào cần kiên nhẫn để học trò tự tìm ra câu trả lời. Các bài học của thầy rèn cho chúng em thói quen suy nghĩ cẩn thận, ghi chép đầy đủ và trình bày kết quả bằng chứng cụ thể. Là Tổ trưởng khối KHTN, thầy còn giúp đồng nghiệp đổi mới bài giảng, phối hợp hoạt động và cùng nhau nâng cao chất lượng chuyên môn. Chúng em ghi nhớ cách thầy bình tĩnh trước khó khăn và không bỏ cuộc dù bài học có thể mất nhiều thời gian. Dưới sự dẫn dắt của thầy, Khoa học không còn xa lạ mà trở thành hành trình khám phá thế giới quanh ta. Kính chúc thầy luôn mạnh khỏe, hạnh phúc và giữ mãi niềm say mê trong giảng dạy.',
  'bui-thi-bang-bgh': 'Thưa cô Bùi Thị Băng, nhân Ngày Nhà giáo Việt Nam, chúng em xin gửi cô lời cảm ơn chân thành vì sự tận tụy và gần gũi trong công tác tại trường THCS. Cô luôn giữ thái độ nghiêm túc nhưng không nặng nề, nhắc nhở chúng em bằng sự tôn trọng để mỗi học sinh tự nhận ra trách nhiệm của mình. Những giờ học của cô trở thành cơ hội để chúng em luyện cách lắng nghe, diễn đạt suy nghĩ và biết tự tin trong quyết định của bản thân. Cô quan tâm đến học sinh không chỉ qua kết quả bài kiểm tra mà còn qua hành vi, thái độ và sự tiến bộ từng ngày. Chúng em biết ơn vì cô kiên nhẫn sửa lỗi, khuyến khích chúng em thử lại và không để bất kỳ khó khăn nào biến thành nỗi mặc cảm. Tấm gương của cô dạy chúng em rằng sự đúng mực đi cùng lòng nhân ái sẽ tạo nên một môi trường học tập ấm áp. Kính chúc cô mạnh khỏe, bình an và mãi giữ được tình yêu nghề trong từng tiết dạy.',
  'nguyen-thi-huong': 'Kính gửi cô Nguyễn Thị Hương, nhân ngày 20/11, chúng em xin gửi lời tri ân vì cô đã giúp tiếng Anh trở nên sinh động, gần gũi và dễ tiếp cận hơn. Cô khuyến khích chúng em mạnh dạn nói, không sợ phát âm sai và xem mỗi lỗi là bước đệm để tiến bộ. Các hoạt động nghe, nói, đọc, viết do cô tổ chức đều mở ra cơ hội giao tiếp, hiểu văn hóa và tự tin thể hiện ý kiến. Cô luôn quan sát từng học sinh để khen đúng điểm mạnh và góp ý đúng lúc, khiến bài học trở nên nhẹ nhàng nhưng vẫn nghiêm túc. Nhờ cô, chúng em biết rằng ngoại ngữ không chỉ là kiến thức mà còn là cầu nối với thế giới và con người. Chúng em trân trọng thái độ vui vẻ, kiên nhẫn và tôn trọng mà cô dành cho mọi học trò. Kính chúc cô sức khỏe dồi dào, hạnh phúc và tiếp tục truyền ngọn lửa yêu tiếng Anh.',
  'nguyen-thi-hong-thoan': 'Thưa cô Nguyễn Thị Hồng Thoan, nhân Ngày Nhà giáo Việt Nam, chúng em xin gửi cô lời cảm tạ vì sự quan tâm chân thành mà cô dành cho tập thể chủ nhiệm. Cô để ý từng thay đổi của học sinh, lắng nghe trước khi nhắc nhở và dẫn chúng em đến cách giải quyết hòa nhã. Trong lớp, cô dạy chúng em trân trọng người khác, giữ lời hứa và chịu trách nhiệm với nhiệm vụ được giao. Những lời nhắc nhẹ nhàng của cô đã giúp nhiều bạn hiểu sai sót của mình mà không mất niềm tin vào bản thân. Chúng em biết ơn vì cô tạo nên một nơi an toàn để học trò được chia sẻ, hợp tác và cùng nhau trưởng thành. Tấm gương của cô cho thấy công tác chủ nhiệm không chỉ là quản lý nề nếp mà còn là vun bồi tình cảm tập thể. Kính chúc cô luôn mạnh khỏe, vui vẻ và mãi giữ được sự tận tâm trong công việc.',
  'ly-thi-mai': 'Kính gửi cô Lý Thị Mai, nhân ngày 20/11, chúng em xin gửi lời biết ơn vì cô đã cùng tổ chuyên môn xây dựng những giờ học Khoa học tự nhiên đầy quan sát và khám phá. Cô khuyến khích chúng em đặt câu hỏi, kiểm tra giả thuyết và trình bày kết quả bằng lập luận rõ ràng. Cách cô phân tích hiện tượng giúp những kiến thức phức tạp trở nên dễ hình dung và gần gũi với đời sống. Trong vai trò Tổ phó khối KHTN, cô còn tích cực chia sẻ kinh nghiệm, hỗ trợ đồng nghiệp và góp phần nâng cao hoạt động chuyên môn. Chúng em học được rằng khoa học đòi hỏi tính cẩn thận, tính tò mò và thái độ cầu thị. Nhờ cô, chúng em nhìn thế giới xung quanh bằng con mắt khám phá thay vì thói quen ghi nhớ máy móc. Kính chúc cô nhiều sức khỏe, bình an và tiếp tục truyền cảm hứng đến các em.',
  'ta-thuy-duong': 'Thưa cô Tạ Thùy Dương, nhân Ngày Nhà giáo Việt Nam, chúng em xin gửi lời tri ân sâu sắc đến cô với vai trò chủ nhiệm, Thư ký tổ chuyên môn và Phó Bí thư Đoàn Thanh niên. Cô luôn dành thời gian để chăm lo tập thể, kết nối công việc và hỗ trợ học sinh trong những công việc cần sự phối hợp. Từ việc tổ chức hoạt động đến ghi chép chuyên môn, cô làm mọi việc bằng sự chu đáo, kỷ luật và tinh thần trách nhiệm. Chúng em học được cách lắng nghe, phân công rõ ràng và đồng lòng hoàn thành nhiệm vụ khi nhìn thấy sự tận tụy của cô. Cô không chỉ dạy bằng lời mà còn dạy bằng cách cô hiện diện đúng lúc và sẵn sàng chia sẻ khó khăn. Nhờ cô, nhiều hoạt động trong trường trở nên gọn gàng, gắn kết và đầy ý nghĩa. Kính chúc cô luôn mạnh khỏe, nhiệt huyết và hạnh phúc trong công việc.',
  'nguyen-thi-thao-thcs': 'Kính gửi cô Nguyễn Thị Thảo trong vai trò giáo viên THCS và cốt cán môn Lịch sử, nhân ngày 20/11, chúng em xin gửi lời cảm tạ chân thành. Cô giúp quá khứ không còn là chuỗi mốc khô khan mà trở thành câu chuyện về con người, lựa chọn và bài học của dân tộc. Trong từng bài giảng, cô rèn cho chúng em thói quen đặt câu hỏi, đối chiếu nguồn và liên hệ lịch sử với đời sống hiện tại. Là người cốt cán, cô còn chia sẻ kinh nghiệm và góp sức nâng cao chất lượng chuyên môn cho tổ cùng đồng nghiệp. Chúng em trân trọng sự công bằng, nghiêm túc và kiên nhẫn của cô với mọi thế hệ học trò. Nhờ cô, chúng em hiểu rằng biết yêu lịch sử là biết trân trọng cội nguồn và nhìn tương lai bằng ánh mắt có chiều sâu. Kính chúc cô mạnh khỏe, minh mẫn và mãi giữ nhiệt huyết truyền lửa tri thức.',
  'nguyen-thi-thao-tieu-hoc': 'Thưa cô Nguyễn Thị Thảo, nhân Ngày Nhà giáo Việt Nam, chúng em xin gửi cô lời tri ân vì sự ân cần cô dành cho học sinh tiểu học. Cô kiên nhẫn hướng dẫn từng em từ nề nếp nhỏ đến cách học bài, luôn để học trò thấy mình có thể tiến bộ nếu chịu khó. Vai trò tổ phó khối 4–5 giúp cô kết nối đồng nghiệp, chia sẻ kinh nghiệm và tạo điều kiện cho hoạt động chung được thuận lợi. Cô làm công tác chủ nhiệm bằng sự quan tâm, công bằng và những lời động viên vừa sức. Chúng em học được cách hoàn thành nhiệm vụ, tôn trọng bạn bè và mạnh dạn thể hiện suy nghĩ của mình. Tình thương của cô dành cho tuổi thơ không làm chúng em phụ thuộc mà giúp chúng em tin vào khả năng của bản thân. Kính chúc cô nhiều sức khỏe, hạnh phúc và gặp nhiều niềm vui.',
  'bui-van-manh': 'Kính gửi thầy Bùi Văn Mạnh, nhân ngày 20/11, chúng em xin trân trọng cảm ơn thầy vì vai trò chủ nhiệm và công tác công nghệ, dữ liệu trong nhà trường. Thầy giúp chúng em hiểu rằng công nghệ là công cụ có giá trị khi được sử dụng đúng, an toàn và có trách nhiệm. Qua công việc CSDL, hồ sơ điện tử và phổ cập giáo dục, thầy góp phần giữ cho hoạt động nhà trường chính xác, thông suốt và gần gũi hơn. Trong lớp chủ nhiệm, thầy vẫn dành thời gian lắng nghe, nhắc nhở học sinh và hướng chúng em đến thói quen chủ động. Chúng em biết ơn sự cẩn thận, tinh thần sẵn sàng hỗ trợ và thái độ điềm đạm của thầy. Tấm gương của thầy dạy chúng em rằng một người lao động tận tâm có thể tạo ảnh hưởng lớn dù công việc không ồn ào. Kính chúc thầy sức khỏe dồi dào, hạnh phúc và luôn hứng khởi.',
  'nguyen-hong-khanh': 'Thưa thầy Nguyễn Hồng Khánh, nhân Ngày Nhà giáo Việt Nam, chúng em xin gửi lời cám ơn vì thầy đã tạo nên một không gian học tập cởi mở và đáng tin cậy. Thầy khuyến khích học trò đặt câu hỏi, thử suy luận và không coi sai sót là điều đáng xấu hổ. Nhờ cách giảng rõ ràng và dùng ví dụ gần gũi, chúng em cảm thấy kiến thức dễ hình dung và có ý nghĩa hơn trong đời sống. Thầy biết tôn trọng mỗi tốc độ tiếp thu, đồng thời theo sát để mọi học sinh không bị bỏ lại phía sau. Chúng em học được rằng một câu hỏi tốt có thể mở ra toàn bộ hành trình khám phá. Sự công bằng, kiên nhẫn của thầy khiến lớp học vừa có kỷ luật vừa có sức sống. Kính chúc thầy luôn khỏe mạnh, sáng tạo và vui khi nhìn học trò tiến bộ.',
  'pham-thi-dung': 'Kính gửi cô Phạm Thị Dung, nhân ngày 20/11, chúng em xin gửi cô lời tri ân bởi sự dịu dàng, kiên nhẫn và lòng quan tâm cô dành cho học sinh THCS. Cô chú ý đến từng bước tiến nhỏ, ghi nhận nỗ lực và giúp chúng em sửa lỗi mà không làm tổn thương tinh thần. Những lời khích lệ của cô giúp học trò mạnh dạn hỏi khi chưa hiểu và trung thực khi đã mắc sai lầm. Cô dạy chúng em rằng thành công đến từ thói quen chăm chỉ, trung thực và không ngừng hoàn thiện. Bầu không khí trong giờ học của cô vừa nghiêm túc vừa thân thiện, tạo điều kiện để mọi học sinh tự tin thể hiện. Chúng em trân trọng cách cô luôn tôn trọng học trò như những người đang lớn. Kính chúc cô sức khỏe, hạnh phúc và mãi giữ giọng nói ấm áp.',
  'bach-thi-bich-ngoc': 'Thưa cô Bạch Thị Bích Ngọc, nhân Ngày Nhà giáo Việt Nam, chúng em xin gửi lời cảm tạ vì cô đã mở ra những tiếng nói tự tin bằng tiếng Anh. Cô hướng dẫn chúng em nghe, nói, đọc, viết bằng tình huống gần gũi, giúp ngôn ngữ trở thành công cụ thay vì nỗi áp lực. Cô luôn khích lệ học trò thử sai, sửa lại và nói tiếp, từ đó chúng em biết rằng tiến bộ đến từ luyện tập chứ không phải sự hoàn hảo. Mỗi hoạt động do cô tổ chức đều khơi mở sự tò mò về văn hóa, con người và thế giới ngoài biên giới. Chúng em trân trọng sự kiên nhẫn, sự vui vẻ và thái độ công bằng cô dành cho từng bạn. Nhờ cô, ngoại ngữ không còn xa lạ mà trở thành cầu nối để chúng em tự tin bước vào tương lai. Kính chúc cô nhiều sức khỏe, nhiều niềm vui và thành công.',
  'bui-thi-bang': 'Kính gửi cô Bùi Thị Bằng, nhân Ngày Nhà giáo Việt Nam 20/11, chúng em xin kính trọng cảm tạ cô vì tấm lòng, trách nhiệm và sự thấu cảm trong công việc. Cô phụ trách lao động, tư vấn tâm lý và nhiều công tác quản lý, luôn lắng nghe trước khi đưa ra quyết định. Sự quan tâm của cô giúp thầy cô và học sinh có điểm tựa khi gặp khó khăn, băn khoăn hoặc cần được định hướng. Cô dạy chúng em cách trao đổi rõ ràng, nhận biết cảm xúc và tìm lời giải an toàn thay vì né tránh vấn đề. Nhiều đóng góp của cô ẩn trong việc chuẩn bị chu đáo, xử lý tình huống cẩn thận và giữ kỷ cương nhà trường. Chúng em trân trọng vì cô vừa nghiêm túc vừa nhân hậu trong mọi vai trò. Kính chúc cô sức khỏe dồi dào, bình an và hạnh phúc.',
  'tran-thi-hang': 'Thưa cô Trần Thị Hằng, nhân ngày 20/11, chúng em xin gửi cô lời tri ân vì sự tận tình trong công tác chủ nhiệm. Cô quan sát từng học sinh, giữ nề nếp hợp lý và luôn nhắc chúng em biết quan tâm, hỗ trợ lẫn nhau. Cô tạo cho tập thể một môi trường cởi mở, nơi mỗi ý kiến đều có thể được lắng nghe nhưng cũng phải đi cùng trách nhiệm. Chúng em học cách hoàn thành việc được giao, tôn trọng lời hứa và nhìn nhận lỗi sai bằng thái độ sửa đổi. Những buổi sinh hoạt do cô dẫn dắt giúp lớp chúng em đoàn kết hơn, biết chia sẻ khó khăn và cùng nhau tiến lên. Cô đã để lại ấn tượng bằng sự công bằng, dịu dàng và kiên định. Kính chúc cô luôn mạnh khỏe, vui vẻ và nhận nhiều niềm vui từ học trò.',
  'bui-thi-dien': 'Kính gửi cô Bùi Thị Diện, nhân Ngày Nhà giáo Việt Nam, chúng em xin gửi cô lời cảm ơn vì công tác chủ nhiệm đầy kiên nhẫn và công bằng. Cô kiên trì giảng giải, động viên chúng em đứng lên sau sai lầm và luôn ghi nhận sự cố gắng dù nhỏ. Cô không đặt áp lực để học sinh giống nhau mà giúp mỗi người nhận ra điểm mạnh và xây dựng cách tiến bộ phù hợp. Trong tập thể, cô tạo ra nề nếp rõ ràng nhưng không làm mất đi sự thân thiện. Chúng em học được rằng chăm chỉ, biết lắng nghe và trung thực sẽ mang lại kết quả bền lâu. Tấm gương của cô nhắc chúng em rằng người thầy quan trọng không chỉ cung cấp tri thức mà còn tin vào khả năng của học trò. Kính chúc cô sức khỏe, bình an và tràn đầy niềm tự hào.',
  'nguyen-thi-yen': 'Thưa cô Nguyễn Thị Yến, nhân ngày 20/11, chúng em xin gửi cô lời tri ân vì sự nghiêm túc và ân cần trong giảng dạy. Cô vừa làm cho bài học có trật tự, vừa tạo không gian để học sinh hỏi và trình bày điều mình chưa rõ. Những góp ý cụ thể của cô giúp chúng em nhận ra điểm mạnh cần phát huy và lỗi cần sửa để học tập tiến bộ. Cô dạy rằng chăm chỉ không chỉ là làm nhiều mà còn là biết tự kiểm điểm và hoàn thiện từng bước. Chúng em trân trọng giọng nhắc nhở điềm đạm, công bằng và luôn vì lợi ích của học trò. Từ cô, chúng em học được một phẩm chất quan trọng là kiên trì thực hiện điều tốt dù không dễ. Kính chúc cô nhiều sức khỏe, hạnh phúc và vui vẻ trong công việc.',
  'bui-thi-thao': 'Kính gửi cô Bùi Thị Thảo, nhân Ngày Nhà giáo Việt Nam, chúng em xin gửi lời cảm tạ vì tấm lòng cô dành cho tuổi nhỏ và công tác tổ khối. Cô chăm lo nề nếp, dẫn dắt từng em làm quen bài học và hỗ trợ đồng nghiệp để hoạt động tiểu học diễn ra thuận lợi. Cô khích lệ học sinh tự tin, kiên nhẫn và biết giúp đỡ bạn bè trong giờ học. Trong vai trò tổ phó, cô luôn quan sát, chia sẻ kinh nghiệm và bảo đảm công việc được phân công rõ ràng. Chúng em học được rằng sự mạnh dạn của một đứa trẻ thường bắt đầu từ lời tin tưởng của người lớn. Cô đã làm ấm những ngày đầu đời ở trường bằng sự dịu dàng mà vẫn có kỷ luật. Kính chúc cô mạnh khỏe, tươi vui và mãi giữ được tình thương dành cho học trò.',
  'phi-thi-huyen': 'Thưa cô Phí Thị Huyền, nhân ngày 20/11, chúng em xin gửi cô lời chúc ấm áp và lời tri ân chân thành. Cô kiên nhẫn dìu dắt học sinh trong những nề nếp và bài học đầu tiên, giúp các em cảm thấy an tâm khi mới bước vào trường. Khi học sinh còn rụt rè, cô luôn động viên nhẹ nhàng để mỗi em có thêm can đảm. Cô quan sát từng khó khăn nhỏ, từ cách làm quen bạn bè đến việc giữ trật tự, vì vậy lời nhắc của cô thường đúng lúc và dễ chấp nhận. Chúng em học được cách hợp tác cùng bạn, chủ động thực hiện nhiệm vụ và không sợ thử lại. Công việc của cô là nền tảng cho cả một hành trình học tập nhiều kỷ niệm sau này, khi mỗi em tự tin vượt qua từng nấc thang trưởng thành. Kính chúc cô sức khỏe, nhiều nụ cười và tiếp tục đồng hành dịu dàng cùng tuổi thơ.',
  'bui-thi-ha-chi': 'Kính gửi cô Bùi Thị Hà Chi, nhân Ngày Nhà giáo Việt Nam, chúng em xin chân thành cảm ơn sự ân cần mà cô dành cho học trò và lớp học. Cô hình thành thói quen chuẩn bị bài, giữ nề nếp và ghi nhận từng cố gắng bằng cách gần gũi. Cô kiên nhẫn giải thích lại khi học sinh chưa hiểu, luôn để em nào cũng có cơ hội được đặt câu hỏi. Nhờ cô, lớp học trở thành nơi thân thiện để chúng em học cách giúp đỡ lẫn nhau và tôn trọng sự khác biệt. Chúng em biết rằng những nếp sống tốt cần được luyện tập mỗi ngày chứ không chỉ nghe qua một lần. Cô đã giúp nhiều bạn có thêm tự tin, chỗ dựa và tinh thần tự giác. Kính chúc cô mạnh khỏe, hạnh phúc và luôn được học trò yêu mến.',
  'bui-thi-thanh': 'Thưa cô Bùi Thị Thanh, nhân ngày 20/11, chúng em xin gửi cô lời tri ân vì vai trò chủ nhiệm và sự kết nối cô mang lại cho khối 1–2–3. Cô vừa quan tâm từng học sinh vừa phối hợp các lớp để hoạt động chung được chuẩn bị chu đáo. Cô dạy chúng em hoàn thành nhiệm vụ bằng thói quen cẩn thận, biết giúp đỡ bạn và chịu trách nhiệm với tập thể. Những buổi sinh hoạt do cô tổ chức tạo môi trường để học trò học cách hợp tác thay vì chỉ nghĩ về bản thân. Chúng em ghi nhớ thái độ nhanh nhẹn, công bằng và sự tận tâm của cô trong mỗi công việc. Tấm gương của cô cho chúng em thấy năng lực lãnh đạo tốt luôn đi cùng sự lắng nghe. Kính chúc cô sức khỏe dồi dào, nhiều niềm vui và thành công.',
  'vu-thi-kim-phuong': 'Kính gửi cô Vũ Thị Kim Phượng, nhân Ngày Nhà giáo Việt Nam, chúng em xin gửi lời biết ơn vì công sức của cô trong giảng dạy tiểu học. Cô quan sát từng học sinh, điều chỉnh cách hướng dẫn để kiến thức nền tảng trở nên dễ hiểu. Cô kiên nhẫn luyện cho học trò kỹ năng đọc, viết, suy nghĩ và khơi dậy sự tự tin qua từng bài hoàn thành. Không chỉ dạy chữ, cô còn giúp chúng em biết tôn trọng người khác, giữ nề nếp và chăm chỉ mỗi ngày. Chúng em trân trọng thái độ dịu dàng mà quyết liệt, luôn theo sát đến khi mỗi em hiểu bài. Những trải nghiệm đầu đời cùng cô đã tạo nền tảng cho cả hành trình học tập sau này. Kính chúc cô mạnh khỏe, bình an và hạnh phúc.',
  'nguyen-hong-nam': 'Thưa thầy Nguyễn Hồng Nam, nhân ngày 20/11, chúng em xin gửi lời cảm tạ vì thầy đã kiên trì đồng hành trong công tác chủ nhiệm và tổ khối 4–5. Thầy khuyến khích học sinh chủ động lập kế hoạch, biết theo dõi nhiệm vụ và không né tránh lỗi sai. Vai trò Tổ phó giúp thầy kết nối đồng nghiệp, phối hợp hoạt động và hỗ trợ nâng cao chất lượng dạy học. Chúng em học được cách tự điều chỉnh, kiên trì giải bài khó và yêu cầu giúp đỡ đúng lúc. Thầy dạy bằng thái độ công bằng, rõ ràng và luôn tin rằng mọi học sinh đều có thể tiến bộ. Dưới sự dẫn dắt của thầy, chúng em nhận ra trách nhiệm là hành động nhất quán trong học tập và sinh hoạt. Kính chúc thầy nhiều sức khỏe, thành công và vui vẻ.',
  'pham-thi-van': 'Kính gửi cô Phạm Thị Vân, nhân Ngày Nhà giáo Việt Nam, chúng em xin gửi lời tri ân vì sự gần gũi và tầm nhìn tổ khối của cô. Cô chăm lo lớp chủ nhiệm bằng thái độ tin tưởng, luôn khích lệ học trò chủ động học tập và giao tiếp thẳng thắn. Trong vai trò Tổ trưởng khối 4–5, cô kết nối đồng nghiệp, xây dựng hoạt động hợp tác và quan tâm đến từng tiến bộ của học sinh. Cô vừa nghiêm túc về trách nhiệm vừa mềm mỏng trong cách động viên, tạo nên môi trường an toàn để học trò thử sức. Chúng em biết ơn những góp ý cụ thể giúp chúng em nhìn ra điểm mạnh và điểm cần rèn. Cô đã dạy rằng việc học tốt bắt đầu bằng sự chủ động chứ không chỉ chờ người khác thúc ép. Kính chúc cô sức khỏe dồi dào, hạnh phúc và gặt hái nhiều thành quả.',
  'bui-thi-mo': 'Thưa cô Bùi Thị Mơ, nhân ngày 20/11, chúng em xin gửi lời tri ân sâu sắc về hai vai trò cô đang đảm nhiệm trong công tác chủ nhiệm và chăm sóc y tế. Cô chủ nhiệm bằng sự kiên nhẫn, quan tâm từng em và tạo nề nếp để lớp học phát triển đoàn kết, tự giác. Đồng thời, cô chăm sóc sức khỏe học sinh bằng sự chu đáo, nhẹ nhàng và luôn sẵn sàng lắng nghe khi cần hỗ trợ. Chúng em học cách giữ vệ sinh, quan tâm cơ thể và biết hợp tác để bảo vệ sức khỏe cộng đồng. Cô dạy rằng việc chăm sóc con người không nằm ở lời nói mà ở hành động nhỏ nhưng đều đặn. Tấm gương của cô cho thấy một người có thể vừa nghiêm túc vừa nhân ái ở nhiều vai trò. Kính chúc cô luôn mạnh khỏe, vui tươi và hạnh phúc.',
  'dinh-thi-thu-huyen': 'Kính gửi cô Đinh Thị Thu Huyền, nhân Ngày Nhà giáo Việt Nam, chúng em xin cảm ơn cô vì đã đưa nghệ thuật đến gần tuổi thơ. Cô dạy Mĩ thuật và Âm nhạc bằng sự khích lệ, giúp học trò tự do sáng tạo, cảm nhận màu sắc, hình khối, nhịp điệu và cảm xúc. Cô không yêu cầu mọi sản phẩm giống nhau mà khơi gợi dấu ấn riêng của từng học sinh. Qua từng bài thực hành, chúng em học cách kiên nhẫn, quan sát, phối hợp và trân trọng sản phẩm của bạn. Nghệ thuật do cô dẫn dắt trở thành nơi chúng em thể hiện bản thân, thư giãn và kết nối với nhau. Chúng em biết ơn vì cô luôn tôn trọng trí tưởng tượng và dành không gian để cảm xúc được bày tỏ. Kính chúc cô nhiều sức khỏe, cảm hứng và niềm vui.',
  'bui-thi-thoa': 'Thưa cô Bùi Thị Thoa, nhân ngày 20/11, chúng em xin gửi lời biết ơn cô trong vai trò giáo viên và Thư ký Hội đồng nhà trường. Cô xử lý thông tin, ghi chép, phối hợp công việc và giữ sự chính xác trong từng chi tiết được giao. Công việc của cô ít phát ra ở bục giảng nhưng lại giúp thầy cô, học sinh và hoạt động chung kết nối nhịp nhàng. Cô làm việc với sự cẩn thận, chu đáo và tinh thần trách nhiệm, luôn sẵn sàng hỗ trợ khi có thay đổi đột xuất. Chúng em học được rằng kỷ luật nghề nghiệp bắt đầu từ việc tôn trọng dữ liệu, thời gian và cam kết. Cô cho chúng em thấy sự yên tâm của tập thể được xây từ những đóng góp thầm lặng. Kính chúc cô sức khỏe, bình an và vui vẻ.',
  'nguyen-khanh-toan': 'Kính gửi thầy Nguyễn Khánh Toàn, nhân Ngày Nhà giáo Việt Nam, chúng em xin gửi lời tri ân vì vai trò thầy trong Công nghệ và công tác Tổng phụ trách Đội. Thầy biến kiến thức công nghệ thành bài học thực tế, giúp chúng em biết tự chủ, sáng tạo và sử dụng công cụ đúng mục đích. Thầy còn dẫn dắt sinh hoạt Đội bằng kỷ luật, tinh thần hợp tác và trách nhiệm với cộng đồng. Qua các hoạt động, chúng em học cách chuẩn bị, làm việc theo nhóm và quan tâm đến lợi ích chung. Thầy luôn để học sinh chủ động nhưng vẫn theo sát để mọi em có hướng đi an toàn. Tấm gương của thầy dạy chúng em rằng tinh thần Đội viên được thể hiện bằng hành động cụ thể. Kính chúc thầy nhiều sức khỏe, năng lượng và niềm vui.',
  'dao-kim-lien': 'Thưa cô Đào Kim Liên, nhân ngày 20/11, chúng em xin gửi lời chúc thân thương và lời cảm tạ cô trong công tác chủ nhiệm. Cô dẫn dắt học sinh làm quen trường lớp bằng sự nhẹ nhàng, kiên nhẫn và gần gũi. Cô giúp các em hình thành nề nếp, ham học và biết yêu thương bạn bè qua từng việc nhỏ trong ngày. Khi học sinh còn bỡ ngỡ, cô lắng nghe, động viên và tạo không gian để các em mạnh dạn thử lại. Chúng em học được cách tự chuẩn bị, hợp tác, tôn trọng lời hứa và thể hiện cảm xúc một cách lành mạnh. Lớp học dưới bàn tay cô đã trở thành nơi an toàn để tuổi thơ tự tin phát triển và tin vào khả năng của bản thân. Kính chúc cô mạnh khỏe, hạnh phúc và có nhiều kỷ niệm vui.',
  'bach-thi-thuy': 'Kính gửi cô Bạch Thị Thủy, nhân Ngày Nhà giáo Việt Nam, chúng em xin ghi nhận công việc kế toán cô đã thực hiện bằng sự chính xác và trách nhiệm. Cô xử lý con số, chứng từ và hoạt động tài chính với tinh thần cẩn thận, minh bạch và kỷ luật. Nhờ sự chu đáo của cô, nhà trường vận hành ổn định để thầy cô tập trung cho giảng dạy và học sinh yên tâm học tập. Cô ít xuất hiện trước lớp nhưng đóng góp của cô luôn hiện diện trong từng hoạt động được chuẩn bị đầy đủ. Chúng em trân trọng vì cô làm việc đều đặn, không bỏ qua chi tiết nhỏ và luôn giữ cam kết với tập thể. Công việc của cô dạy chúng em rằng nền nếp tài chính cũng là nền nếp của một cộng đồng. Kính chúc cô sức khỏe, bình an và thuận lợi.',
  'le-vinh-ha': 'Thưa thầy Lê Vĩnh Hà, nhân ngày 20/11, chúng em xin gửi lời tri ân vì sự chỉn chu và đáng tin cậy trong công tác kế toán, thủ quỹ. Thầy theo dõi thu chi, kiểm tra thông tin và giữ cho hoạt động tài chính minh bạch, ổn định. Dù công việc ít ở phía bục giảng, thầy vẫn góp sức thiết thực để các hoạt động của thầy cô và học sinh diễn ra thuận lợi. Chúng em biết ơn tính cẩn thận, sự kiên định và thái độ phục vụ của thầy. Qua thầy, chúng em hiểu rằng tiết kiệm, trung thực và trân trọng tài sản chung là những trách nhiệm cần rèn luyện. Thầy đã để lại ấn tượng của người làm việc thầm lặng nhưng luôn đáng tin. Kính chúc thầy mạnh khỏe, an vui và gặp nhiều thuận lợi.',
  'quach-thi-thu-hien': 'Kính gửi cô Quách Thị Thu Hiền, nhân Ngày Nhà giáo Việt Nam, chúng em xin gửi lời cảm tạ cô trong công tác phục vụ nhà trường. Cô chăm lo sạch sẽ, ngăn nắp và giữ cho không gian lớp học, hành lang luôn dễ chịu để mọi người an tâm học tập. Công việc của cô đòi hỏi chăm chỉ lặp lại đều đặn, vì vậy nó càng cho thấy tinh thần trách nhiệm cao. Chúng em học được cách giữ gìn vệ sinh chung, trân trọng công sức của người khác và thể hiện biết ơn bằng hành động cụ thể. Cô đã giúp mỗi ngày đến trường trở nên khang trang hơn bằng những đóng góp thầm lặng. Chúng em trân trọng sự bền bỉ và tâm huyết của cô. Kính chúc cô sức khỏe, vui vẻ và gặp nhiều điều tốt lành.',
  'bach-mai-tho': 'Thưa chú Bạch Mai Thọ, nhân Ngày Nhà giáo Việt Nam, chúng em xin gửi lời cảm ơn vì công việc văn thư đáng quý của chú. Chú sắp xếp hồ sơ, thông tin và hỗ trợ lưu giữ tài liệu để các hoạt động nhà trường được thông suốt, kịp thời. Sự tỉ mỉ của chú giúp thầy cô tiết kiệm thời gian và học sinh nhận thông tin chính xác hơn. Chúng em biết ơn những đóng góp thầm lặng phía sau giấy tờ, thông báo và hồ sơ từng ngày. Công việc của chú dạy chúng em trân trọng trật tự, ghi chép cẩn thận và xem mỗi trách nhiệm là phần quan trọng của tập thể. Chú đã góp sức tạo nên nhịp nhàng cho mái trường bằng tính kiên nhẫn. Kính chúc chú mạnh khỏe, vui vẻ và luôn được mọi người yêu mến.',
  'ha-quang-hiep': 'Kính gửi thầy Hà Quang Hiệp, nhân ngày 20/11, chúng em xin gửi lời tri ân vì thầy đã đem đến một không khí học tập thân thiện và chủ động ở khối THCS. Thầy khuyến khích chúng em đặt câu hỏi, trao đổi ý kiến và kiên trì hoàn thành bài học dù gặp khó khăn. Cách giảng của thầy rõ ràng, điềm đạm và gắn liền với suy nghĩ thực tế, khiến kiến thức dễ hình dung hơn. Thầy luôn công bằng trong đánh giá, quan tâm đến tiến bộ của từng học sinh và tôn trọng ý kiến khác nhau. Chúng em học được rằng tự tin bắt đầu từ việc sẵn sàng thử, sai và rút kinh nghiệm. Sự tận tâm của thầy đã để lại động lực để mỗi học sinh tiếp tục khám phá điều mới. Kính chúc thầy sức khỏe, sáng tạo và tràn đầy niềm vui.',
};

export const teachers: Teacher[] = teacherProfiles.map((teacher) => ({
  ...teacher,
  message: personalMessages[teacher.id] ?? '',
}));
