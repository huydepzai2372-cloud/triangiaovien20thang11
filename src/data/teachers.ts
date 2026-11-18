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
    | 'Tổ Khoa học xã hội & Khối Tiểu học';
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
    quote: 'Một ngôi trường lớn lên từ sự tận tâm và tầm nhìn của người dẫn lối.',
    message:
      'Nhân ngày Nhà giáo Việt Nam, chúng em kính gửi cô lời tri ân chân thành. Trên cương vị Hiệu trưởng, cô luôn tận tụy vun đắp một môi trường học tập an toàn, nhân ái và giàu khát vọng. Sự sâu sát của cô giúp thầy cô yên tâm cống hiến và học trò có thêm cơ hội trưởng thành. Chúng em biết ơn tầm nhìn cùng sự tận tâm cô dành cho mái trường. Kính chúc cô dồi dào sức khỏe, hạnh phúc và luôn vững vàng trên hành trình gieo tri thức.',
  },
  {
    id: 'nguyen-the-tuc',
    slug: 'nguyen-the-tuc',
    name: 'Thầy Nguyễn Thế Túc',
    role: 'Phó Hiệu trưởng',
    department: 'Ban Giám hiệu',
    quote: 'Sự lắng nghe chân thành khiến mọi nỗ lực được tiếp thêm sức mạnh.',
    message:
      'Nhân ngày 20/11, chúng em xin gửi thầy lời cảm ơn kính trọng. Trong vai trò Phó Hiệu trưởng, thầy luôn chu đáo đồng hành cùng các hoạt động dạy và học. Sự lắng nghe và những lời động viên của thầy giúp thầy cô, học trò thêm vững tin khi gặp thử thách. Chúng em trân quý những đóng góp thầm lặng mà thầy dành cho nhà trường. Kính chúc thầy nhiều sức khỏe, niềm vui và tiếp tục lan tỏa tinh thần trách nhiệm.',
  },
  {
    id: 'bui-van-cuong',
    slug: 'bui-van-cuong',
    name: 'Thầy Bùi Văn Cương',
    role: 'Giáo viên; Tổ phó tổ Toán - Tin - Công nghệ',
    department: 'Tổ Toán - Tin - Công nghệ',
    quote: 'Một bài toán hay mở ra nhiều cách nghĩ mới.',
    message:
      'Nhân ngày 20/11, chúng em cảm ơn thầy vì những giờ học Toán, Tin và Công nghệ đầy khám phá. Thầy giúp chúng em hiểu rằng một vấn đề có thể được giải quyết bằng nhiều cách sáng tạo. Trên cương vị Tổ phó, thầy còn góp phần kết nối đồng nghiệp và làm phong phú hoạt động chuyên môn. Sự kiên nhẫn của thầy khiến chúng em mạnh dạn đặt câu hỏi và thử nghiệm ý tưởng. Kính chúc thầy luôn vui với nghề và tiếp tục khơi dậy niềm say mê học hỏi.',
  },
  {
    id: 'bui-van-tan',
    slug: 'bui-van-tan',
    name: 'Thầy Bùi Văn Tân',
    role: 'Giáo viên chủ nhiệm; Tổ trưởng khối KHTN',
    department: 'Tổ Khoa học tự nhiên',
    quote: 'Thiên nhiên là cuốn sách mở ra cho những ai biết quan sát.',
    message:
      'Chúng em kính chúc thầy một ngày 20/11 ấm áp và nhiều niềm vui. Những tiết học Khoa học tự nhiên của thầy khiến các hiện tượng quanh ta trở nên gần gũi. Thầy quan tâm từng học trò và kiên nhẫn giúp chúng em tiến bộ mỗi ngày. Với vai trò Tổ trưởng khối KHTN, thầy còn truyền cảm hứng cho đồng nghiệp cùng đổi mới bài giảng. Cảm ơn thầy đã nuôi dưỡng trong chúng em sự tò mò, tinh thần hợp tác và tình yêu khám phá.',
  },
  {
    id: 'bui-thi-bang',
    slug: 'bui-thi-bang',
    name: 'Cô Bùi Thị Băng',
    role: 'Giáo viên THCS',
    department: 'Giáo viên THCS',
    quote: 'Mỗi giờ học là một cơ hội để hiểu mình và hiểu người hơn.',
    message:
      'Nhân ngày Nhà giáo Việt Nam, chúng em xin gửi cô lời tri ân trìu mến. Cô đã đồng hành cùng học sinh THCS bằng sự tận tụy và gần gũi. Qua mỗi bài học, cô giúp chúng em thêm tự tin, biết sẻ chia và có trách nhiệm với lựa chọn của mình. Chúng em trân trọng sự kiên nhẫn cô dành cho từng lứa học trò. Kính chúc cô luôn mạnh khỏe, bình an và gặp nhiều niềm vui dưới mái trường.',
  },
  {
    id: 'nguyen-thi-huong',
    slug: 'nguyen-thi-huong',
    name: 'Cô Nguyễn Thị Hương',
    role: 'Giáo viên Tiếng Anh',
    department: 'Tổ Ngoại ngữ',
    quote: 'Mỗi lời nói tự tin có thể mở một cánh cửa mới.',
    message:
      'Nhân ngày 20/11, chúng em cảm ơn cô đã làm cho tiếng Anh trở nên gần gũi và thú vị. Cô luôn khuyến khích chúng em luyện tập, mạnh dạn giao tiếp và không sợ mắc lỗi. Nhờ những bài học sinh động, chúng em hiểu thêm về ngôn ngữ và các nền văn hóa khác nhau. Sự động viên của cô giúp mỗi bạn tự tin tiến bộ theo cách riêng. Kính chúc cô thật nhiều sức khỏe, niềm vui và cảm hứng trong từng giờ lên lớp.',
  },
  {
    id: 'nguyen-thi-hong-thoan',
    slug: 'nguyen-thi-hong-thoan',
    name: 'Cô Nguyễn Thị Hồng Thoan',
    role: 'Giáo viên chủ nhiệm',
    department: 'Giáo viên THCS',
    quote: 'Một tập thể ấm áp bắt đầu từ sự quan tâm mỗi ngày.',
    message:
      'Chúng em kính chúc cô một ngày Nhà giáo Việt Nam thật nhiều yêu thương. Cô làm công tác chủ nhiệm bằng sự quan tâm chân thành và luôn để ý đến từng thay đổi của học trò. Cô giúp chúng em biết đoàn kết, tôn trọng nhau và cùng chịu trách nhiệm với tập thể. Những lời nhắc nhở dịu dàng của cô đã giúp chúng em trưởng thành hơn. Cảm ơn cô vì đã biến lớp học thành nơi mỗi bạn đều được lắng nghe và sẻ chia.',
  },
  {
    id: 'ly-thi-mai',
    slug: 'ly-thi-mai',
    name: 'Cô Lý Thị Mai',
    role: 'Giáo viên; Tổ phó khối KHTN',
    department: 'Tổ Khoa học tự nhiên',
    quote: 'Quan sát kỹ hôm nay để hiểu thêm thế giới quanh mình.',
    message:
      'Nhân ngày 20/11, chúng em gửi cô lời cảm ơn chân thành vì những giờ học Khoa học tự nhiên. Cô khuyến khích chúng em quan sát bằng sự tò mò và giải thích hiện tượng bằng lập luận rõ ràng. Với vai trò Tổ phó khối KHTN, cô góp phần chia sẻ kinh nghiệm và làm giàu hoạt động chuyên môn. Cách cô tận tình hướng dẫn khiến kiến thức khó trở nên dễ tiếp cận hơn. Kính chúc cô luôn hạnh phúc, mạnh khỏe và giữ mãi niềm say mê khám phá.',
  },
  { 
    id: 'ta-thuy-duong',
    slug: 'ta-thuy-duong',
    name: 'Cô Tạ Thùy Dương',
    role: 'Giáo viên chủ nhiệm; Thư ký tổ Lý - Hóa - Sinh và tổ chủ nhiệm; Phó Bí thư Đoàn Thanh niên',
    department: 'Tổ Khoa học tự nhiên',
    quote: 'Sự tận tâm đôi khi được gửi gắm trong những việc rất lặng thầm.',
    message:
      'Nhân ngày Nhà giáo Việt Nam, chúng em xin gửi cô lời tri ân sâu sắc. Cô vừa chăm lo cho tập thể học trò, vừa đảm nhiệm nhiều công việc kết nối trong tổ chuyên môn và Đoàn Thanh niên. Sự chu đáo của cô giúp các hoạt động chung diễn ra gọn gàng và đầy tinh thần đồng đội. Chúng em cảm nhận được tấm lòng cô qua từng lời hỏi han và sự hỗ trợ đúng lúc. Kính chúc cô luôn khỏe mạnh, nhiệt huyết và gặp nhiều điều tốt đẹp.',
  },
  {
    id: 'nguyen-thi-thao-thcs',
    slug: 'nguyen-thi-thao-thcs',
    name: 'Cô Nguyễn Thị Thảo',
    role: 'Giáo viên THCS; Giáo viên cốt cán môn Lịch sử cấp tỉnh',
    department: 'Tổ Khoa học xã hội',
    quote: 'Tìm hiểu quá khứ giúp ta nhìn hiện tại sâu sắc hơn.',
    message:
      'Nhân ngày Nhà giáo Việt Nam, chúng em xin gửi cô lời tri ân chân thành. Cô truyền cho chúng em tình yêu Lịch sử bằng những câu chuyện giúp quá khứ trở nên gần gũi. Với vai trò giáo viên cốt cán môn Lịch sử cấp tỉnh, cô còn góp sức lan tỏa kinh nghiệm chuyên môn đến đồng nghiệp. Những bài học của cô dạy chúng em biết tìm hiểu cội nguồn và suy nghĩ thấu đáo về hiện tại. Kính chúc cô luôn mạnh khỏe, giữ trọn nhiệt huyết và tiếp tục khơi mở niềm say mê khám phá lịch sử.',
  },
  {
    id: 'nguyen-thi-thao-tieu-hoc',
    slug: 'nguyen-thi-thao-tieu-hoc',
    name: 'Cô Nguyễn Thị Thảo',
    role: 'Giáo viên tiểu học; Giáo viên chủ nhiệm; Tổ phó tổ 4 - 5',
    department: 'Khối Tiểu học',
    quote: 'Sự khích lệ đúng lúc giúp mỗi học trò thêm tự tin.',
    message:
      'Chúng em kính chúc cô Nguyễn Thị Thảo một ngày 20/11 nhiều niềm vui. Cô ân cần dìu dắt học trò tiểu học và giúp các em tự tin trước những thử thách mới. Trên cương vị Tổ phó tổ 4 - 5, cô còn góp phần kết nối đồng nghiệp và xây dựng hoạt động chung cho khối. Chúng em biết ơn sự kiên nhẫn, chu đáo và những lời động viên cô dành cho từng bạn. Mong cô luôn khỏe mạnh, hạnh phúc và gặt hái nhiều niềm vui bên các thế hệ học trò.',
  },
  {
    id: 'bui-van-manh',
    slug: 'bui-van-manh',
    name: 'Thầy Bùi Văn Mạnh',
    role: 'Giáo viên chủ nhiệm; Phụ trách CSDL, hồ sơ điện tử và công tác PCGD khối THCS',
    department: 'Tổ Toán - Tin - Công nghệ',
    quote: 'Tri thức số có ý nghĩa khi được dùng để phục vụ mọi người.',
    message:
      'Nhân ngày 20/11, chúng em cảm ơn thầy vì đã kiên trì đồng hành cùng học trò. Thầy giúp chúng em làm quen với công nghệ và hiểu cách sử dụng thông tin có trách nhiệm. Công việc quản trị dữ liệu, hồ sơ điện tử và phổ cập giáo dục của thầy góp phần giữ cho hoạt động nhà trường được thông suốt. Chúng em trân trọng sự cẩn thận và tinh thần sẵn sàng hỗ trợ của thầy. Kính chúc thầy nhiều sức khỏe, niềm vui và luôn tìm thấy ý nghĩa trong từng việc mình làm.',
  },
  {
    id: 'nguyen-hong-khanh',
    slug: 'nguyen-hong-khanh',
    name: 'Thầy Nguyễn Hồng Khánh',
    role: 'Giáo viên',
    department: 'Giáo viên THCS',
    quote: 'Một câu hỏi đúng có thể bắt đầu cả hành trình học tập.',
    message: 
     'Nhân ngày Nhà giáo Việt Nam, chúng em xin gửi thầy lời cảm ơn trân trọng. Thầy luôn tạo không khí gần gũi để chúng em mạnh dạn hỏi và cùng nhau tìm lời giải. Những giờ học của thầy giúp kiến thức trở nên dễ hiểu qua ví dụ thiết thực. Chúng em quý sự kiên nhẫn và thái độ công bằng mà thầy dành cho từng học trò. Kính chúc thầy luôn nhiều năng lượng và có thêm thật nhiều khoảnh khắc đáng nhớ bên lớp học.',
  },
  {
    id: 'pham-thi-dung',
    slug: 'pham-thi-dung',
    name: 'Cô Phạm Thị Dung',
    role: 'Giáo viên',
    department: 'Giáo viên THCS',
    quote: 'Sự dịu dàng của người cô có thể làm ngày học nhẹ nhàng hơn.',
    message:
      'Chúng em gửi cô lời chúc thân thương nhân ngày 20/11. Cô luôn tận tụy với công việc giảng dạy và quan tâm đến sự tiến bộ của từng bạn. Những lời khích lệ của cô giúp chúng em thêm tự tin khi gặp bài khó. Cô còn dạy chúng em biết tôn trọng, sẻ chia và nỗ lực đến cùng. Cảm ơn cô đã góp phần làm cho mỗi ngày đến trường trở nên ấm áp hơn.',
  },
  {
    id: 'bach-thi-bich-ngoc',
    slug: 'bach-thi-bich-ngoc',
    name: 'Cô Bạch Thị Bích Ngọc',
    role: 'Giáo viên Tiếng Anh',
    department: 'Tổ Ngoại ngữ',
    quote: 'Ngoại ngữ là nhịp cầu nối những con người khác biệt.',
    message:
      'Nhân ngày 20/11, chúng em cảm ơn cô vì đã mở ra cho chúng em những chân trời mới qua tiếng Anh. Cô hướng dẫn chúng em luyện nghe, nói, đọc, viết bằng sự kiên nhẫn và khích lệ. Mỗi hoạt động trên lớp giúp chúng em thêm tự tin giao tiếp và tìm hiểu các nền văn hóa. Sự tận tình của cô khiến việc học ngoại ngữ trở thành niềm vui thay vì áp lực. Chúc cô luôn mạnh khỏe, hạnh phúc và tiếp tục truyền cảm hứng cho học trò.',
  },
  {
    id: 'bui-thi-bang',
    slug: 'bui-thi-bang',
    name: 'Cô Bùi Thị Bằng',
    role: 'Phó Hiệu trưởng; Phụ trách lao động; Giáo viên; Tư vấn tâm lý học đường',
    department: 'Ban Giám hiệu',
    quote: 'Lãnh đạo bằng trách nhiệm là âm thầm nâng đỡ cả tập thể.',
    message:
      'Nhân ngày Nhà giáo Việt Nam, chúng em kính gửi cô lời biết ơn sâu sắc. Trên cương vị Phó Hiệu trưởng, cô góp sức điều hành nhà trường và chăm lo nhiều công việc thiết thực. Cô còn quan tâm đến đời sống tinh thần của học sinh bằng sự lắng nghe và thấu cảm. Chúng em trân trọng cách cô kết hợp trách nhiệm quản lý với tình thương dành cho học trò. Kính chúc cô dồi dào sức khỏe, bình an và luôn vững bước trong công việc ý nghĩa của mình.',
  },
  {
    id: 'tran-thi-hang',
    slug: 'tran-thi-hang',
    name: 'Cô Trần Thị Hằng',
    role: 'Giáo viên chủ nhiệm',
    department: 'Giáo viên THCS',
    quote: 'Một lớp học tốt được vun đắp bằng sự tin tưởng mỗi ngày.',
    message:
      'Chúng em xin gửi cô lời tri ân ấm áp trong ngày 20/11. Cô làm công tác chủ nhiệm bằng sự tận tình, luôn nhắc chúng em cố gắng và biết quan tâm đến bạn bè. Cô tạo cho tập thể một nề nếp rõ ràng nhưng vẫn gần gũi, thân thương. Nhờ có cô, chúng em học cách hợp tác và tự chịu trách nhiệm với việc học của mình. Kính chúc cô luôn vui khỏe và nhận lại thật nhiều tình cảm từ các thế hệ học trò.',
  },
  {
    id: 'bui-thi-dien',
    slug: 'bui-thi-dien',
    name: 'Cô Bùi Thị Diện',
    role: 'Giáo viên chủ nhiệm',
    department: 'Giáo viên THCS',
    quote: 'Từng bước tiến nhỏ cũng đáng được ghi nhận và khích lệ.',
    message:
      'Nhân ngày Nhà giáo Việt Nam, chúng em cảm ơn cô đã luôn đồng hành cùng học trò. Cô kiên nhẫn giảng giải và động viên chúng em không bỏ cuộc trước khó khăn. Sự quan tâm của cô giúp mỗi bạn nhận ra điểm mạnh và cố gắng tiến bộ từng ngày. Chúng em trân trọng những lời nhắc nhở chân thành cùng sự công bằng cô dành cho tập thể. Chúc cô luôn an vui, mạnh khỏe và có nhiều niềm tự hào về học trò.',
  },
  {
    id: 'nguyen-thi-yen',
    slug: 'nguyen-thi-yen',
    name: 'Cô Nguyễn Thị Yến',
    role: 'Giáo viên',
    department: 'Giáo viên THCS',
    quote: 'Cô gieo lòng ham học bằng những điều giản dị quanh ta.',
    message:
      'Chúng em kính chúc cô Nguyễn Thị Yến một ngày 20/11 tràn đầy niềm vui. Cô luôn nghiêm túc với bài giảng nhưng vẫn ân cần lắng nghe những băn khoăn của học trò. Nhờ cô, chúng em hiểu rằng sự chăm chỉ và tử tế đều cần được rèn luyện mỗi ngày. Những góp ý cụ thể của cô giúp chúng em biết mình cần cố gắng ở đâu. Cảm ơn cô đã bền bỉ đồng hành và chúc cô luôn khỏe mạnh, hạnh phúc.',
  },
  {
    id: 'bui-thi-thao',
    slug: 'bui-thi-thao',
    name: 'Cô Bùi Thị Thảo',
    role: 'Giáo viên chủ nhiệm; Tổ phó khối 1 - 2 - 3',
    department: 'Khối Tiểu học',
    quote: 'Tuổi thơ thêm đẹp khi lớp học có một người cô tận tụy.',
    message:
      'Nhân ngày 20/11, chúng em xin gửi cô lời cảm ơn yêu thương. Cô dạy học trò những bài học đầu đời bằng sự dịu dàng và kiên trì. Với vai trò Tổ phó khối 1 - 2 - 3, cô còn góp phần chia sẻ kinh nghiệm chăm sóc và dạy học các em nhỏ. Mỗi lời khen đúng lúc của cô giúp chúng em thêm tự tin khám phá. Kính chúc cô luôn tươi vui, mạnh khỏe và mãi giữ được tình yêu dành cho tuổi thơ.',
  },
  {
    id: 'phi-thi-huyen',
    slug: 'phi-thi-huyen',
    name: 'Cô Phí Thị Huyền',
    role: 'Giáo viên chủ nhiệm',
    department: 'Khối Tiểu học',
    quote: 'Một lời động viên dịu dàng giúp em nhỏ thêm can đảm.',
    message:
      'Chúng em xin chúc cô Phí Thị Huyền một ngày Nhà giáo Việt Nam thật vui. Cô kiên nhẫn dìu dắt học trò qua những nề nếp và bài học đầu tiên. Sự dịu dàng của cô giúp các em cảm thấy an tâm khi làm quen với trường lớp. Cô luôn khích lệ từng cố gắng nhỏ để các em mạnh dạn hơn mỗi ngày. Cảm ơn cô đã trao cho các em một khởi đầu học tập đầy yêu thương.',
  },
  {
    id: 'bui-thi-ha-chi',
    slug: 'bui-thi-ha-chi',
    name: 'Cô Bùi Thị Hà Chi',
    role: 'Giáo viên chủ nhiệm',
    department: 'Khối Tiểu học',
    quote: 'Nền nếp đầu đời bắt đầu từ tình thương và sự bền lòng.',
    message:
      'Nhân ngày 20/11, chúng em gửi cô Bùi Thị Hà Chi lời tri ân chân thành. Cô làm công tác chủ nhiệm bằng sự ân cần, giúp học trò hình thành thói quen học tập tốt. Cô kiên nhẫn giải thích lại bài và luôn ghi nhận sự cố gắng của từng bạn. Nhờ có cô, lớp học trở thành nơi thân thiện để các em tự tin thể hiện mình. Chúc cô nhiều sức khỏe, niềm vui và luôn được học trò yêu quý.',
  },
  {
    id: 'bui-thi-thanh',
    slug: 'bui-thi-thanh',
    name: 'Cô Bùi Thị Thanh',
    role: 'Giáo viên chủ nhiệm; Tổ trưởng khối 1 - 2 - 3',
    department: 'Khối Tiểu học',
    quote: 'Một tập thể vững vàng được xây từ những việc nhỏ làm cùng nhau.',
    message:
      'Chúng em kính chúc cô Bùi Thị Thanh một ngày 20/11 nhiều niềm vui. Cô vừa làm công tác chủ nhiệm vừa tận tâm kết nối các lớp trong khối 1 - 2 - 3. Sự chu đáo của cô giúp hoạt động chung được chuẩn bị nền nếp và gần gũi với học sinh. Cô luôn dạy chúng em biết giúp đỡ bạn bè và cùng hoàn thành nhiệm vụ. Cảm ơn cô vì đã là người cô tận tụy và người dẫn dắt đáng tin cậy của khối lớp.',
  },
  {
    id: 'vu-thi-kim-phuong',
    slug: 'vu-thi-kim-phuong',
    name: 'Cô Vũ Thị Kim Phượng',
    role: 'Giáo viên tiểu học',
    department: 'Khối Tiểu học',
    quote: 'Những năm tháng tiểu học là hành trang quý cho chặng đường dài.',
    message:
      'Nhân ngày Nhà giáo Việt Nam, chúng em xin gửi cô lời chúc thân thương. Cô đem đến cho học sinh tiểu học những bài học nền tảng bằng sự kiên nhẫn và quan tâm. Cô giúp mỗi em thêm tự tin đọc, viết, suy nghĩ và khám phá thế giới xung quanh. Chúng em biết ơn sự chăm chút cô dành cho những bước trưởng thành đầu tiên ấy. Kính chúc cô luôn khỏe mạnh, bình an và có nhiều niềm vui bên học trò.',
  },
  {
    id: 'nguyen-hong-nam',
    slug: 'nguyen-hong-nam',
    name: 'Thầy Nguyễn Hồng Nam',
    role: 'Giáo viên chủ nhiệm; Tổ phó khối 4 - 5',
    department: 'Khối Tiểu học',
    quote: 'Sự đồng hành tận tâm giúp lớp học luôn tiến về phía trước.',
    message:
      'Chúng em gửi thầy lời cảm ơn chân thành nhân ngày 20/11. Thầy làm công tác chủ nhiệm với tinh thần trách nhiệm và luôn khuyến khích học sinh tự giác. Trên cương vị Tổ phó khối 4 - 5, thầy còn tích cực phối hợp để nâng cao hoạt động dạy học. Những hướng dẫn rõ ràng của thầy giúp chúng em biết lập kế hoạch và kiên trì với mục tiêu. Kính chúc thầy nhiều sức khỏe, thành công và luôn giữ niềm vui với nghề.',
  },
  {
    id: 'pham-thi-van',
    slug: 'pham-thi-van',
    name: 'Cô Phạm Thị Vân',
    role: 'Giáo viên chủ nhiệm; Tổ trưởng khối 4 - 5',
    department: 'Khối Tiểu học',
    quote: 'Người cô tận tụy giúp mỗi em nhỏ tin vào khả năng của mình.',
    message:
      'Nhân ngày Nhà giáo Việt Nam, chúng em kính gửi cô Phạm Thị Vân lời tri ân. Cô chăm lo học trò bằng sự gần gũi và luôn khích lệ chúng em học tập chủ động. Với vai trò Tổ trưởng khối 4 - 5, cô còn góp sức xây dựng môi trường hợp tác giữa các lớp. Chúng em quý cách cô vừa nghiêm túc vừa luôn tin tưởng vào sự tiến bộ của học trò. Chúc cô dồi dào sức khỏe, nhiều niềm vui và tiếp tục gặt hái những thành quả tốt đẹp.',
  },
  {
    id: 'bui-thi-mo',
    slug: 'bui-thi-mo',
    name: 'Cô Bùi Thị Mơ',
    role: 'Giáo viên chủ nhiệm',
    department: 'Khối Tiểu học',
    quote: 'Sự kiên nhẫn hôm nay sẽ hóa thành tự tin ngày mai.',
    message:
      'Chúng em kính chúc cô Bùi Thị Mơ một ngày 20/11 thật vui vẻ. Cô làm công tác chủ nhiệm bằng sự kiên nhẫn và luôn quan tâm đến từng bạn. Cô giúp chúng em rèn tính tự giác, biết lắng nghe và cùng nhau vượt qua những bài học khó. Những lời động viên của cô khiến tập thể thêm đoàn kết và chăm chỉ. Cảm ơn cô đã đồng hành với chúng em trong một năm học nhiều kỷ niệm.',
  },
  {
    id: 'dinh-thi-thu-huyen',
    slug: 'dinh-thi-thu-huyen',
    name: 'Cô Đinh Thị Thu Huyền',
    role: 'Giáo viên Mĩ thuật khối 1 - 2; Giáo viên Âm nhạc khối 1 - 9',
    department: 'Nghệ thuật',
    quote: 'Màu sắc và âm thanh làm giàu trí tưởng tượng của tuổi thơ.',
    message:
      'Nhân ngày 20/11, chúng em cảm ơn cô đã mang nghệ thuật đến với nhiều khối lớp. Những giờ Mĩ thuật và Âm nhạc của cô giúp chúng em tự do sáng tạo, cảm nhận cái đẹp và mạnh dạn thể hiện cảm xúc. Cô luôn kiên nhẫn hướng dẫn để mỗi sản phẩm đều mang dấu ấn riêng của người làm ra nó. Nhờ cô, chúng em hiểu rằng nghệ thuật có thể kết nối và làm phong phú cuộc sống. Kính chúc cô luôn vui tươi, nhiều cảm hứng và ngập tràn sắc màu trong mỗi ngày.',
  },
  {
    id: 'bui-thi-thoa',
    slug: 'bui-thi-thoa',
    name: 'Cô Bùi Thị Thoa',
    role: 'Giáo viên; Thư ký Hội đồng nhà trường',
    department: 'Văn phòng - Hội đồng',
    quote: 'Sự chu đáo trong từng việc nhỏ tạo nên một hội đồng gắn kết.',
    message:
      'Chúng em xin gửi cô lời tri ân trong ngày Nhà giáo Việt Nam. Cô vừa đứng lớp vừa tận tâm làm công việc thư ký Hội đồng nhà trường. Sự cẩn thận của cô giúp thông tin và hoạt động chung được kết nối rõ ràng, chu đáo. Chúng em biết ơn những đóng góp bền bỉ phía sau các công việc thường ngày ấy. Kính chúc cô mạnh khỏe, nhiều niềm vui và luôn nhận được sự trân trọng từ đồng nghiệp, học trò.',
  },
  {
    id: 'nguyen-khanh-toan',
    slug: 'nguyen-khanh-toan',
    name: 'Thầy Nguyễn Khánh Toàn',
    role: 'Giáo viên Công nghệ khối 3 - 5; Tổng phụ trách Đội',
    department: 'Công nghệ - Tổng phụ trách Đội',
    quote: 'Người anh phụ trách Đội thắp lên tinh thần kỷ luật và sẻ chia.',
    message:
      'Nhân ngày 20/11, chúng em cảm ơn thầy vì những bài học Công nghệ gần gũi và thiết thực. Thầy còn tận tâm hướng dẫn hoạt động Đội, giúp chúng em rèn tính kỷ luật và tinh thần tập thể. Qua các nhiệm vụ, chúng em học cách chủ động, hợp tác và biết quan tâm đến cộng đồng. Sự nhiệt tình của thầy khiến mỗi hoạt động trở nên vui tươi và ý nghĩa. Kính chúc thầy luôn mạnh khỏe, tràn đầy năng lượng và tiếp tục đồng hành cùng chúng em.',
  },
  {
    id: 'dao-kim-lien',
    slug: 'dao-kim-lien',
    name: 'Cô Đào Kim Liên',
    role: 'Giáo viên chủ nhiệm',
    department: 'Khối Tiểu học',
    quote: 'Bước vào lớp học đầu tiên, em cần một bàn tay dịu dàng dẫn đường.',
    message:
      'Chúng em kính chúc cô Đào Kim Liên một ngày Nhà giáo Việt Nam ấm áp. Cô làm công tác chủ nhiệm bằng sự nhẹ nhàng, gần gũi và luôn kiên nhẫn với từng em. Cô giúp các em rèn nề nếp, nuôi dưỡng lòng ham học và biết yêu thương bạn bè. Mỗi lời khen của cô đều tiếp thêm can đảm để các em thử sức với điều mới. Cảm ơn cô đã làm cho lớp học trở thành nơi an toàn và tràn đầy niềm vui.',
  },
  {
    id: 'bach-thi-thuy',
    slug: 'bach-thi-thuy',
    name: 'Cô Bạch Thị Thủy',
    role: 'Kế toán',
    department: 'Kế toán - Thủ quỹ',
    quote: 'Sự chính xác và tận tâm giữ cho công việc chung luôn vững vàng.',
    message:
      'Nhân ngày 20/11, chúng em xin gửi cô Bạch Thị Thủy lời cảm ơn trân trọng. Công việc kế toán của cô đòi hỏi sự cẩn thận và trách nhiệm trong từng con số. Nhờ sự chu đáo ấy, nhiều hoạt động của nhà trường được hỗ trợ và vận hành ổn định. Chúng em trân quý những đóng góp thầm lặng giúp thầy cô tập trung cho việc dạy học. Kính chúc cô nhiều sức khỏe, bình an và luôn gặp thuận lợi trong công việc.',
  },
  {
    id: 'le-vinh-ha',
    slug: 'le-vinh-ha',
    name: 'Thầy Lê Vĩnh Hà',
    role: 'Kế toán; Thủ quỹ',
    department: 'Kế toán - Thủ quỹ',
    quote: 'Từng khoản thu chi rõ ràng là nền nếp đáng quý của tập thể.',
    message:
      'Chúng em kính chúc thầy Lê Vĩnh Hà một ngày Nhà giáo Việt Nam thật ý nghĩa. Thầy đảm nhiệm công việc kế toán và thủ quỹ với sự chỉn chu, đáng tin cậy. Sự cẩn trọng của thầy góp phần giữ cho các hoạt động nhà trường được minh bạch và ổn định. Dù công việc ít xuất hiện trước lớp, những đóng góp của thầy luôn rất cần thiết. Cảm ơn thầy và chúc thầy luôn mạnh khỏe, an vui, gặp nhiều thuận lợi.',
  },
  {
    id: 'bui-thi-mo',
    slug: 'bui-thi-mo',
    name: 'Cô Bùi Thị Mơ',
    role: 'Nhân viên y tế',
    department: 'Y tế học đường',
    quote: 'Sức khỏe tốt giúp mỗi ngày đến trường thêm trọn vẹn.',
    message:
      'Nhân ngày 20/11, chúng em xin gửi cô Bùi Thị Mơ lời tri ân ấm áp. Cô luôn chăm sóc sức khỏe học sinh bằng sự chu đáo và ân cần. Khi chúng em mệt hay cần giúp đỡ, cô sẵn lòng lắng nghe và hướng dẫn tận tình. Công việc của cô giúp chúng em an tâm học tập và biết quan tâm hơn đến sức khỏe của mình. Kính chúc cô luôn mạnh khỏe, bình an và có thật nhiều niềm vui.',
  },
  {
    id: 'quach-thi-thu-hien',
    slug: 'quach-thi-thu-hien',
    name: 'Cô Quách Thị Thu Hiền',
    role: 'Nhân viên phục vụ',
    department: 'Phục vụ',
    quote: 'Một ngôi trường sạch đẹp được gìn giữ bằng sự tận tụy mỗi ngày.',
    message:
      'Chúng em xin gửi cô Quách Thị Thu Hiền lời cảm ơn chân thành nhân ngày 20/11. Công việc phục vụ của cô góp phần giữ cho không gian trường lớp sạch sẽ và ngăn nắp. Sự chăm chỉ của cô giúp thầy cô và học sinh có môi trường học tập dễ chịu hơn. Chúng em sẽ thể hiện lòng biết ơn bằng cách giữ gìn vệ sinh và trân trọng công sức của cô. Kính chúc cô luôn khỏe mạnh, vui vẻ và gặp nhiều điều tốt lành.',
  },
  {
    id: 'bach-mai-tho',
    slug: 'bach-mai-tho',
    name: 'Chú Bạch Mai Thọ',
    role: 'Nhân viên văn thư',
    department: 'Văn thư',
    quote: 'Những trang giấy ngăn nắp lưu giữ nhịp điệu của mái trường.',
    message:
      'Nhân ngày Nhà giáo Việt Nam, chúng em xin gửi chú Bạch Mai Thọ lời tri ân. Công việc văn thư của chú giúp hồ sơ và thông tin nhà trường được sắp xếp cẩn thận. Sự tỉ mỉ ấy góp phần để các hoạt động chung diễn ra thông suốt và đúng lúc. Chúng em trân trọng những đóng góp âm thầm phía sau mỗi trang giấy, thông báo và hồ sơ. Kính chúc chú nhiều sức khỏe, niềm vui và luôn được tập thể yêu quý.',
  },
  {
    id: 'ha-quang-hiep',
    slug: 'ha-quang-hiep',
    name: 'Thầy Hà Quang Hiệp',
    role: 'Giáo viên',
    department: 'Giáo viên THCS',
    quote: 'Tiếng chuông rung lên, ý chí học tập cũng theo đó mà lớn dần.',
    message:
      'Nhân ngày 20/11, chúng em kính gửi thầy Hà Quang Hiệp lời tri ân chân thành. Những giờ học THCS dưới sự hướng dẫn của thầy luôn mang lại cảm giác gần gũi và đầy hứng thú. Thầy kiên nhẫn giúp chúng em hiểu bài qua cách giảng rõ ràng và khuyến khích chúng em mạnh dạn trao đổi ý kiến. Sự nghiêm túc và công bằng của thầy giúp các bạn thêm tự tin hoàn thành trách nhiệm học tập. Kính chúc thầy nhiều sức khỏe, giữ mãi nhiệt huyết và gặt hái niềm vui trong từng buổi lên lớp.',
  }
];
