const footerContent = ` <div id="footer-top">
<div class="container">
  <div class="row fix-dir justify-content-between">
    <div id="contact-section" class="col-md-6 col-lg-4 mb-5">
      <h3>
        <span class="en">Contact Information</span>
        <span class="ar">معلومات للتواصل</span>
      </h3>

      <div class="contact-info-box">
        <div class="img-box">
          <img src="pics/person-icon.png" alt="pesron-icon" />
        </div>
        <p>
          <span class="en">Riad Musaitif</span>
          <span class="ar">رياض مصيطف</span>
        </p>
      </div>
      <div class="contact-info-box">
        <div class="img-box">
          <img src="pics/phone-icon.png" alt="pesron-icon" />
        </div>
        <p>+1 309 885 1185</p>
      </div>
      <div class="contact-info-box">
        <div class="img-box">
          <img src="pics/email-icon.png" alt="pesron-icon" />
        </div>
        <p>musaitif@gmail.com</p>
      </div>
    </div>

    <div class="col-md-6 col-lg-4 mb-5 text-left">
      <h3>
        <span class="en">Additional Baytin links</span>
        <span class="ar">روابط بيتين إضافية</span>
      </h3>
      <ul class="list-unstyled footer-links">
        <li>
          <a
            href="https://www.facebook.com/BeiteenAssociation/"
            target="_blank"
          >
            <span class="en">Beiteen Association</span>
            <span class="ar">جمعية بيتين</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/betein.baldna1"
            target="_blank"
          >
            <span class="en">Betein Baldna</span>
            <span class="ar">بيتين بلدنا</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/betein.first.5"
            target="_blank"
          >
            <span class="en">Betein First</span>
            <span class="ar">بيتين أولا</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="col-md-6 mx-auto col-lg-4">
      <h3>
        <span class="en">Baytin's Map</span>
        <span class="ar">خريطة بيتين</span>
      </h3>
      <div
        class="embed-responsive embed-responsive-4by3 map-container"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27090.144355926088!2d35.25442060661439!3d31.92647929916047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151cd50ab568223d%3A0xbb3731e7319c2bf7!2z2KjZitiq2YrZhg!5e0!3m2!1sar!2sjo!4v1595708275885!5m2!1sar!2sjo"
          frameborder="0"
          style="border: 0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          class="embed-responsive-item"
        ></iframe>
      </div>
    </div>
  </div>
</div>
</div>

<div id="footer-bottom">
<div class="container">
  <div class="row py-5 text-center border-top">
    <div class="col-md-12">
      <div>
        <p>
          <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
          Copyright &copy;
          <script>
            document.write(new Date().getFullYear());
          </script>
          All rights reserved | This template is made by
          <a href="https://colorlib.com" target="_blank">Colorlib</a>
          <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
        </p>
      </div>
    </div>
  </div>
</div>
</div>`;

document.getElementsByTagName("footer")[0].innerHTML = footerContent;
