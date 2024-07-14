import image1 from "@/public/images/user/user-01.jpg";
import image2 from "@/public/images/user/user-02.jpg";
import image3 from "@/public/images/user/user-03.jpg";
import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Nguyễn Thị Hương",
    designation: "nthuong@gmail.com",
    image: image1,
    content:
      "Tui là Hương đang học lớp 10 và tui cảm thấy rất may mắn khi tìm được khoá học này,nó giúp tui không còn sợ hãi khi thi môn văn nữa",
  },
  {
    id: 2,
    name: "Nguyễn Đức Huynh",
    designation: "devhuynhnd@gmail.com",
    image: image2,
    content:
      "Mình là Huynh học sinh THPT Hùng Vương. mình cảm thấy chương trình học ở đây cực kỳ khoa học và dễ hiểu, mình đã từng là một học sinh 'sợ văn', nhưng sau khi học ở đây thì giờ đây mình đã tự tin chiến đấu với tất cả các thể loại văn học ở trường.",
  },
  {
    id: 3,
    name: "Thảo Thạch",
    designation: "nttthao@gmail.com",
    image: image3,
    content:
      "Website vô cùng chất lượng luôn nha mọi người, học xong là tự tin +100 luôn nha mọi người, bao thi bao đậu luôn nha mọi người :D",
  },
  // {
  //   id: 4,
  //   name: "Jhon Abraham",
  //   designation: "Founter @democompany",
  //   image: image2,
  //   content:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, ligula sit amet cursus tincidunt, lorem sem elementum nisi, convallis fringilla ante nibh non urna.",
  // },
];
