const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');

  // Scroll lock/unlock
  if (navMenu.classList.contains('active')) {
    document.body.style.overflow = 'hidden'; // menu open → scroll off
  } else {
    document.body.style.overflow = 'auto';   // menu close → scroll on
  }
});

// Menu link click → close menu + scroll unlock
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    document.body.style.overflow = 'auto'; // scroll on
  });
});


// Lazy load video source
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".hero-video");
  const source = video.querySelector("source");

  source.src = source.dataset.src;
  video.load();

  video.addEventListener("canplaythrough", () => {
    video.classList.add("loaded");
  });

  // Scroll to product section on "প্রোডাক্ট দেখুন" button click
  document.getElementById("cta-products").addEventListener("click", () => {
    const productSection = document.getElementById("product-gallery");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  });

  // "ডিলার হোন" বাটন ক্লিক ইভেন্ট
  const btnDealer = document.getElementById("cta-dealer");
  if (btnDealer) {
    btnDealer.addEventListener("click", () => {
      window.location.href = "https://m-atrading.github.io/Dealer_Submission_Form/";
    });
};
    
});

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.why-choose-us-section .card');

  const revealOnScroll = () => {
    const windowBottom = window.innerHeight + window.scrollY;

    cards.forEach(card => {
      const cardTop = card.offsetTop;

      if (windowBottom > cardTop + 100) { // When card enters viewport + 100px
        card.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);

  // Initial call in case cards are in viewport on load
  revealOnScroll();
});


const productsData = {
  1: {
  image: ['0w.webp' , '0w2.webp', '020w3.webp'],
  title: 'Banton SAE 0W-20 API SP 4L GF-6 Hybrid',
  price: 'BDT 4,200',
  description: `
<p><strong>BANTON SAE 0W-20 API SP 4L (Hybrid)</strong> একটি প্রিমিয়াম ফুল সিনথেটিক ইঞ্জিন অয়েল, যা আধুনিক গ্যাসোলিন ইঞ্জিন বিশেষ করে হাইব্রিড গাড়ির জন্য ডিজাইন করা হয়েছে। এটি সর্বশেষ API SP এবং ILSAC GF-6 মান পূরণ করে এবং ইঞ্জিনকে সর্বোচ্চ সুরক্ষা, জ্বালানি সাশ্রয় এবং কম তাপমাত্রায় কার্যক্ষমতা প্রদান করে।</p>

<p>0W-20 গ্রেড অয়েলটি ঠান্ডা আবহাওয়ায় দ্রুত স্টার্টআপ নিশ্চিত করে এবং ঘর্ষণ কমিয়ে ইঞ্জিনের আয়ুষ্কাল বাড়ায়। এর উন্নত অ্যাডডিটিভ প্রযুক্তি স্লাজ, ওয়্যার এবং ডিপোজিটকে প্রতিহত করে, ইঞ্জিনকে পরিচ্ছন্ন ও কার্যকর রাখে। টার্বোচার্জড এবং ডাইরেক্ট ইনজেকশন ইঞ্জিনের জন্যও এটি উপযুক্ত।</p>

<p>⚡ <strong>উচ্চ গতি, শক্তিশালী পারফরম্যান্স:</strong> Nano Max Technology দ্বারা চালিত, এই প্রিমিয়াম ৪-স্ট্রোক অয়েল ইঞ্জিনকে সর্বোচ্চ সুরক্ষা, মসৃণ পারফরম্যান্স এবং দীর্ঘস্থায়ী টেকসইতা প্রদান করে।</p>

<h3>মূল বৈশিষ্ট্য:</h3>
<ul>
<li>পূর্ণ সিনথেটিক ফর্মুলেশন, সর্বোচ্চ পারফরম্যান্সের জন্য</li>
<li>API SP & ILSAC GF-6 সার্টিফায়েড</li>
<li>হাইব্রিড ও আধুনিক গ্যাসোলিন ইঞ্জিনের জন্য ডিজাইন করা</li>
<li>জ্বালানি সাশ্রয় ও ইমিশন নিয়ন্ত্রণ উন্নত</li>
<li>LSPI থেকে চমৎকার সুরক্ষা</li>
<li>দীর্ঘ সময় ব্যবহারের সক্ষমতা</li>
</ul>

<h3>পরামর্শ দেওয়া হয়েছে:</h3>
<p>Toyota, Honda, Nissan, Mazda, Hyundai এবং অন্যান্য এশিয়ান ও আমেরিকান হাইব্রিড/নন-হাইব্রিড যানবাহনের জন্য SAE 0W-20 ব্যবহার করা যেতে পারে।</p>

<p>🌍 গর্বের সাথে ম্যানুফ্যাকচারড ইন মালয়েশিয়া<br>✨ আপনার ইঞ্জিনের বিশ্বস্ত সঙ্গী , পারফরম্যান্সে কোনো কমপ্রোমাইজ নয়</p>
`
}
,

  2: {
  image: ['20w50.webp' , '20w2.webp', '020w3.webp'],
  title: 'BANTON SAE 20W-50 API SP 4LTS',
  price: 'BDT 4,200',
  description: `
<p><strong>BANTON SAE 20W-50 API SP 4LTS</strong> একটি উচ্চ ক্ষমতার মাল্টিগ্রেড ইঞ্জিন অয়েল, যা বিশেষভাবে পুরনো, বেশি দূরত্ব পার হওয়া বা উচ্চ তাপমাত্রার গ্যাসোলিন এবং ডিজেল ইঞ্জিনের জন্য তৈরি। এই প্রিমিয়াম মিনারেল বেসড অয়েল ইঞ্জিনের অতিরিক্ত পরিধান রোধ করে, অয়েল খরচ কমায় এবং চমৎকার তাপীয় স্থিতিশীলতা প্রদান করে — বিশেষভাবে বাংলাদেশের মত উষ্ণ জলবায়ুর জন্য উপযুক্ত।</p>

<p>20W-50 গ্রেড এর ঘন ভিসকোসিটি উচ্চ লোড এবং তাপমাত্রায় ভালো লুব্রিকেশন নিশ্চিত করে, যা যাত্রীবাহী এবং বাণিজ্যিক উভয় ধরনের যানবাহনের জন্য অতিরিক্ত ইঞ্জিন সুরক্ষা প্রদান করে। এটি API SP স্ট্যান্ডার্ড পূরণ করে, যা উন্নত কর্মক্ষমতা, দীর্ঘ ইঞ্জিন জীবন এবং পরিচ্ছন্ন অপারেশন নিশ্চিত করে।</p>

<h3>মূল বৈশিষ্ট্য:</h3>
<ul>
<li>উচ্চ দূরত্ব পার হওয়া ইঞ্জিনের জন্য শক্তিশালী সুরক্ষা</li>
<li>API SP সার্টিফাইড, আধুনিক ইঞ্জিনের কার্যক্ষমতার জন্য</li>
<li>চমৎকার উচ্চ তাপমাত্রার স্থিতিশীলতা</li>
<li>অয়েল ক্ষয় এবং পরিধান কমায়</li>
<li>পুরনো ইঞ্জিন, বাণিজ্যিক ব্যবহার এবং উষ্ণ পরিবেশের জন্য উপযুক্ত</li>
<li>গ্যাসোলিন, ডিজেল এবং সিএনজি ইঞ্জিনের জন্য উপযুক্ত</li>
</ul>

<p>🌍 গর্বের সঙ্গে মালয়েশিয়ায় তৈরি<br>✨ আপনার ইঞ্জিনের বিশ্বস্ত সঙ্গী, কর্মক্ষমতায় কোনো আপস নয়</p>
`
}
};
// Event listener for product detail expansion

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.btn-expand').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.product-card');
      const detail = card.querySelector('.product-detail');
      const id = card.dataset.id;

      const data = productsData[id];

      // Title & Price & Description
      detail.querySelector('.detail-title').innerHTML = data.title;
      detail.querySelector('.detail-price').innerHTML = data.price;
      detail.querySelector('.detail-description').innerHTML = data.description;

      // Images (multiple)
      const imagesContainer = detail.querySelector('.detail-images');
      imagesContainer.innerHTML = ''; // clear previous
      if(Array.isArray(data.image)){
        data.image.forEach(imgSrc => {
          const img = document.createElement('img');
          img.src = imgSrc;
          img.alt = data.title;
          img.className = 'detail-image'; // CSS দিয়ে premium look দিতে পারবে
          imagesContainer.appendChild(img);
        });
      } else {
        // single image fallback
        const img = document.createElement('img');
        img.src = data.image;
        img.alt = data.title;
        img.className = 'detail-image';
        imagesContainer.appendChild(img);
      }

      // Close other active details
      document.querySelectorAll('.product-detail.active').forEach(d => {
        if(d !== detail){
          d.classList.remove('active');
          d.style.maxHeight = null;
        }
      });

      // Toggle current
      if(detail.classList.contains('active')){
        detail.classList.remove('active');
        detail.style.maxHeight = null;
      } else {
        detail.classList.add('active');
        detail.style.maxHeight = detail.scrollHeight + "px";
      }
    });
  });

  // Close button
  document.querySelectorAll('.close-detail').forEach(close => {
    close.addEventListener('click', () => {
      const detail = close.closest('.product-detail');
      detail.classList.remove('active');
      detail.style.maxHeight = null;
    });
  });
});

// Modal functionality for dealer application
document.addEventListener('DOMContentLoaded', () => {
  // Modal element
  const modal = document.getElementById('dealer-modal');
  const modalClose = modal.querySelector('.modal-close');

  // Button(s) that trigger modal
  const dealerButtons = document.querySelectorAll('.btn-dealer-apply');

  dealerButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';
      // Optional: scroll lock while modal open
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal on close button click
  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  // Close modal when clicking outside modal content
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  // Optional: ESC key to close modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});



// FAQ accordion functionality
document.addEventListener('DOMContentLoaded', () => {
  const faqButtons = document.querySelectorAll('.faq-question');

  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const answerId = button.getAttribute('aria-controls');
      const answer = document.getElementById(answerId);

      const isOpen = button.getAttribute('aria-expanded') === 'true';

      // শুধু বর্তমান FAQ toggle
      if (isOpen) {
        button.setAttribute('aria-expanded', 'false');
        answer.classList.remove('open');
      } else {
        // অন্য সব open থাকলে close করে দাও
        faqButtons.forEach(btn => {
          const ansId = btn.getAttribute('aria-controls');
          const ans = document.getElementById(ansId);
          btn.setAttribute('aria-expanded', 'false');
          ans.classList.remove('open');
        });

        // বর্তমান open
        button.setAttribute('aria-expanded', 'true');
        answer.classList.add('open');
      }
    });
  });
});
