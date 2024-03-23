import React from "react";
import storyImage from "../assets/images/anhdoi.jpg";
import dinhat from "../assets/images/dinhat.jpg";
import dichoi from "../assets/images/dichoi.jpg";
import cauhon from "../assets/images/cauhon.jpeg";
import anhcuoi from "../assets/images/anhcuoi.jpg";
import landau from "../assets/images/landau.jpg";
import motdoi from "../assets/images/couple.jpg";
function Story() {
  return (
    <div id="story" className="story section-padding">
      <div>
        <section class="story-section section-padding py-0" id="story">
          <div class="container">
            <div class="row">
              <div class="col col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                <div class="section-title">
                  <h2>Chuyện Tình Yêu</h2>
                  <p>
                  Hôn nhân không phải là một điểm đến mà là một cuộc hành trình, nơi mà hai người cùng nhau xây dựng và phát triển.
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="story-block">
                  <ul>
                    <li>
                      <div class="details">
                        <h3>* Lần đầu gặp mặt</h3>
                        <span class="date">March 2, 2020</span>
                        <p>
                          <p>
                            Tụi mình gặp nhau lần đầu tiên tại công ty NSMV, nơi mà hai đứa đang xin vào làm thực tập.
                          </p>
                          <p>Ấn tượng đầu tiên của mình về cô ấy là cực kì trẻ con và ngố lắm.</p>
                          <p>
                            Ấn tượng đầu tiên của mình về anh ấy : Trẻ con, nói nhiều, hay trêu mình, hay nhờ mình dịch tiếng
                            nhật, và bắt mình dạy tiếng nhật. (Hiện tại thì vẫn thế)
                          </p>
                          <p>Anh là người để ý mình trước, và mình vẫn coi anh như “em đồng nghiệp trong công ty thôi”.
Tụi mình vẫn trò chuyện, đi chơi với nhóm bạn trên công ty mà cũng không biết tình cảm phát sinh từ lúc nào.
Từ trò chuyện trên công ty - trong các buổi đi chơi với bạn bè - đến nhắn tin qua lại trên Facebook. Và thế sau một thời gian trò chuyện anh đã ngỏ ý thích mình, mình khá ngạc nhiên xong cũng để đó mà chẳng nói gì .</p>
                          <p>→ Trẻ con mà gặp phải trẻ con thì thành 1 đôi một cặp rồi ^^</p>
                        </p>
                      </div>
                      <div class="img-holder">
                        <img src={landau} alt="" />
                      </div>
                    </li>
                    <li>
                      <div class="img-holder img-holder-hideinmobile">
                        <img src={motdoi} alt="" />
                      </div>
                      <div class="details">
                        <h3>Chúng mình thành một cặp</h3>
                        <span class="date">June 28, 2020</span>
                        <p>
                        Sau chuyến du lịch cùng công ty hồi tháng 6, mình chấp nhận lời hẹn hò từ đằng trai. 
Mình nhận lời một phần mình thấy anh trẻ con nhưng lại có nhiều sở thích giống mình, dễ nói chuyện, và nói chuyện cũng khá thú vị. Và một phần mình cũng muốn có trải nghiệm yêu đương với người kém tuổi, xem bản thân có thấy hợp với “Phi công” hay không.

Và thời gian cứ thế trôi , 28/06/2020 - chúng mình chính thức thành 1 cặp, trong sự ngỡ ngàng ngơ ngác từ các anh - chị - em - bạn bè cùng công ty.
                        </p>
                      </div>
                      <div class="img-holder img-show-hideinmobile">
                        <img src={motdoi} alt="" />
                      </div>
                    </li>
                    <li>
                      <div class="details">
                        <h3>Yêu xa có thật sự là thử thách</h3>
                        <span class="date">Jan 2021 ~ Jan 2022</span>
                        <p>
                        Chúng mình hẹn hò được khoảng 5 tháng thì mình nhận được thông báo sang Nhật thực tập 1 năm. 
Mình khá lo ngại nhưng anh chỉ nói một câu : “Anh đợi em về” . Mình cũng chỉ biết ngật đầu và tạm biệt gia đình, tạm biệt anh để sang Nhật. Bắt đầu cuộc hành trình 365 ngày xa nhau.
1 năm bên Nhật không có ngày nào tụi mình chỉ biết trò chuyện qua màn hình điện thoại, có gì  vui, có gì buồn, đều kể cho nhau nghe. 
Anh giúp mình nhận thấy 1 năm yêu xa không phải là một cái gì quá khó, chỉ cần cả hai vẫn hướng đến ngày gặp lại.
<p>Một năm có thể không dài nhưng nó vẫn là một thử thách có độ khó nhất định cho cả hai tụi mình.</p>
<p>……</p>
Và tụi mình đã cùng nhau trải qua thử thách Yêu xa
                        </p>
                      </div>
                      <div class="img-holder">
                        <img src={dinhat} alt="" />
                      </div>
                    </li>
                    <li>
                      <div class="img-holder img-holder-hideinmobile">
                        <img src={dichoi} alt="" />
                      </div>
                      <div class="details">
                        <h3>Khoảng thời gian anh thực hiện lời hứa </h3>
                        <span class="date">January, 2022 - Now</span>
                        <p>
                        Do tính chất công việc bên Nhật, nên mình gần như không có thời gian để đi đây đi đó, mình khá buồn, và khi đó anh nói “ Về Việt Nam anh sẽ cho em đi những nơi mà em muốn “ 
Tháng 1 năm 2022, mình trở về Việt Nam cùng anh thực hiện lời hứa
Anh đã đưa mình đi gần như là tất cả nhũng nơi mình muốn. Chỉ cần mình nói “Tháng sau đi …… chơi đi” - Anh đáp lại : “Lên lịch” . Anh chẳng bận tâm gì, mình bảo đi là anh sẽ cho mình đi.
                        </p>
                      </div>
                      <div class="img-holder img-show-hideinmobile">
                        <img src={dichoi} alt="" />
                      </div>
                    </li>
                    <li>
                      <div class="details">
                        <h3>Phút giây cầu hôn</h3>
                        <span class="date"> March 8, 2024</span>
                        <p>
                        Mình không nhớ là mình từng nói : ”Em muốn được cầu hôn”, chỉ biết là anh đã lắng nghe mong muốn của mình và thực hiện nó vào đúng ngày sinh nhật của mình. 
                        Mặc dù thời điểm đó mọi việc chuẩn bị cho đám cưới cũng gần xong rồi. Nhưng anh vẫn làm cho mình từ bất ngờ này đến bất ngờ khác.
Anh đưa mình đi thử nhẫn cưới, rồi teamworks với chị tư vấn lấy size ngón tay mình thành công, mà mình không hề hay biết (lúc đó mình chỉ biết là đi mua nhẫn cưới thôi, và cũng chẳng nghĩ gì đến chuyện được cầu hôn ).
Đến khi mình bảo : “Ôi vừa tay em luôn này” - anh kể ra, mình mới biết rằng anh đã chuẩn bị cầu hôn mình từ khá lâu rồi.
<p>Mình cảm thấy rất bất ngờ và vô cùng hạnh phúc. </p>
                        </p>
                      </div>
                      <div class="img-holder">
                        <img src={cauhon} alt="" />
                      </div>
                    </li>
                    <li>
                      <div class="img-holder img-holder-hideinmobile">
                        <img src={anhcuoi} alt="" />
                      </div>
                      <div class="details">
                        <h3>Chúng mình cưới nhau</h3>
                        <span class="date">March 31, 2024</span>
                        <p>
                        Vậy là : sau 3 năm 9 tháng 3 ngày - tán tỉnh - hẹn hò - tìm hiểu - yêu xa. 
                        <p>Cuối cùng, chúng mình chuẩn bị sẽ đi tới một Happy Ending - một lễ cưới vào 31/3/2024. </p>
Bắt đầu cho một hành trình cùng nhau xây dựng một gia đình nhỏ xinh, cùng nhau tạo nên những điều tuyệt vời, …
<p>Hãy đến tham dự, chung vui cùng tụi mình nhé !</p>
                        </p>
                      </div>
                      <div class="img-holder img-show-hideinmobile">
                        <img src={anhcuoi} alt="" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Story;
