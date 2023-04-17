// Scrollytelling Intro Desktop //
const title = d3.select("#g-ai1-5");
const slide0 = d3.select("#g-ai1-6");
const slide1 = d3.select("#g-ai1-2");
const slide2 = d3.select("#g-ai1-3");
const slide3 = d3.select("#g-ai1-1");
const slide4 = d3.select("#g-ai1-4");
const introSVG = d3.select("#g-v2-intro-text-Desktop-intro-Layer-img"); 
const headerImg = d3.select("#intro-desktop");

// Scrollytelling Intro Mobile //
const titleMobile = d3.select("#g-ai1-m5");
const slide0Mobile = d3.select("#g-ai1-m6");
const slide1Mobile = d3.select("#g-ai1-m1");
const slide2Mobile = d3.select("#g-ai1-m2");
const slide3Mobile = d3.select("#g-ai1-m4");
const slide4Mobile = d3.select("#g-ai1-m3");
const introSVGMobile = d3.select("#g-mobile-scroller-Mobile-scroller-scroller-mobile-img");
const headerImgMobile = d3.select("#intro-mobile");

//Display landing image
// Desktop
document.addEventListener('DOMContentLoaded', function() {
  headerImg.transition().delay(500).duration(1000).style('opacity', 1);
  introSVG.transition().delay(1000).transition().duration(1000).style('opacity', 1);
  title.transition().delay(1500).duration(1000).style('opacity', 1);
  headerImgMobile.transition().delay(500).duration(1000).style('opacity', 1);
  introSVGMobile.transition().delay(1000).transition().duration(1000).style('opacity', 1);
  titleMobile.transition().delay(1500).duration(1000).style('opacity', 1);
});

// Step Zero
  d3.select("#step-zero").on('stepin', function() {
    slide0.transition().duration(500).style('opacity', 0);
    title.transition().duration(500).style('opacity', 1);
    slide0Mobile.transition().duration(500).style('opacity', 0);
    titleMobile.transition().duration(500).style('opacity', 1);
});

// Step One
  d3.select("#step-one").on('stepin', function() {
    title.transition().duration(500).style('opacity', 0);
    slide1.transition().duration(500).style('opacity', 0);
    slide0.transition().delay(500).duration(500).style('opacity', 1);
    titleMobile.transition().duration(500).style('opacity', 0);
    slide1Mobile.transition().duration(500).style('opacity', 0);
    slide0Mobile.transition().delay(500).duration(500).style('opacity', 1);
    d3.selectAll("#g-v2-intro-text-box, #g-mobile-scroller-box").selectAll("g, #college5, #college5M, #problemchild, #problemchildM")
    .filter(function() {
      return this.id !== "college1" && this.id !== "highschool1" && this.id !== "figures";
    })
    .transition().duration(500).style("opacity", 1);
    d3.select("#college1").transition().duration(500).style("fill", "black");
    d3.select("#highschool1").transition().duration(500).style("fill", "black");
    d3.select("#college1M").transition().duration(500).style("fill", "black");
    d3.select("#highschool1M").transition().duration(500).style("fill", "black");
  });

// Step Two
function updateGOpacity() {
  d3.selectAll("#figures g, #figuresM g, #college5, #college5M, #problemchild, #problemchildM")
    .filter(function() {
      return this.id !== "college1" && this.id !== "highschool1" && this.id !== "figures" && this.id !== "college1M" && this.id !== "highschool1M" && this.id !== "figuresM";
    })
    .transition().duration(500).style("opacity", 0.25);
  d3.select("#college1").transition().duration(500).style("fill", "#02C7D1");
  d3.select("#highschool1").transition().duration(500).style("fill", "#FF6701");
  d3.select("#college1M").transition().duration(500).style("fill", "#02C7D1");
  d3.select("#highschool1M").transition().duration(500).style("fill", "#FF6701");
}

  d3.select("#step-two").on('stepin', function() {
    slide0.transition().duration(500).style('opacity', 0);
    slide2.transition().duration(500).style('opacity', 0);
    slide1.transition().delay(500).duration(500).style('opacity', 1);
    slide0Mobile.transition().duration(500).style('opacity', 0);
    slide2Mobile.transition().duration(500).style('opacity', 0);
    slide1Mobile.transition().delay(500).duration(500).style('opacity', 1);
    updateGOpacity();
  });

// Step Three
d3.select("#step-three").on('stepin', function() {
    slide1.transition().duration(500).style('opacity', 0);
    slide3.transition().duration(500).style('opacity', 0);
    slide2.transition().delay(500).duration(500).style('opacity', 1);
    slide1Mobile.transition().duration(500).style('opacity', 0);
    slide3Mobile.transition().duration(500).style('opacity', 0);
    slide2Mobile.transition().delay(500).duration(500).style('opacity', 1);
    d3.selectAll("#figures g, #figuresM g, #problemchild, #problemchildM, #college2, #college3, #college4, #college5, #college6, #college7, #college8, #college9, #college10, #highschool2, #highschool3, #highschool4, #highschool5, #highschool6, #highschool7, #highschool8, #highschool9, #highschool10, #college2M, #college3M, #college4M, #college5M, #college6M, #college7M, #college8M, #college9M, #college10M, #highschool2M, #highschool3M, #highschool4M, #highschool5M, #highschool6M, #highschool7M, #highschool8M, #highschool9M, #highschool10M" )
    .filter(function() {
      return this.id !== "college1" && this.id !== "highschool1" && this.id !== "figures" && this.id !== "college1M" && this.id !== "highschool1M" && this.id !== "figuresM";
    })
    .transition().duration(500).style("opacity", 1).style("fill", "black");
});

// Step Four
  d3.select("#step-four").on('stepin', function() {
    slide2.transition().duration(500).style('opacity', 0);
    slide4.transition().duration(500).style('opacity', 0);
    slide3.transition().delay(500).duration(500).style('opacity', 1);
    slide2Mobile.transition().duration(500).style('opacity', 0);
    slide4Mobile.transition().duration(500).style('opacity', 0);
    slide3Mobile.transition().delay(500).duration(500).style('opacity', 1);
    d3.selectAll("#figures g, #figuresM g, #problemchild, #problemchildM")
    .filter(function() {
      return this.id !== "figures" && this.id !== "figuresM";
    })
    .transition().duration(500).style("opacity", 0.25);
    d3.selectAll("#college1, #college2, #college3, #college4, #college5, #college6, #college7, #college8, #college9, #college10, #college1M, #college2M, #college3M, #college4M, #college5M, #college6M, #college7M, #college8M, #college9M, #college10M").transition().duration(500).style("fill", "#02C7D1");
    d3.selectAll("#highschool1, #highschool2, #highschool3, #highschool4, #highschool5, #highschool6, #highschool7, #highschool8, #highschool9, #highschool10, #highschool1M, #highschool2M, #highschool3M, #highschool4M, #highschool5M, #highschool6M, #highschool7M, #highschool8M, #highschool9M, #highschool10M").transition().duration(500).style("fill", "#FF6701");
  });

// Step Five
  d3.select("#step-five").on('stepin', function() {
    slide3.transition().duration(500).style('opacity', 0);
    slide4.transition().delay(500).duration(500).style('opacity', 1);
    slide3Mobile.transition().duration(500).style('opacity', 0);
    slide4Mobile.transition().delay(500).duration(500).style('opacity', 1);
    d3.selectAll("#figures g, #figuresM g, #problemchild, #problemchildM")
    .filter(function() {
      return !["college1", "college2", "college3", "college4", "college5", "college6", "college7", "college8", "college9", "college10", "highschool1", "highschool2", "highschool3", "highschool4", "highschool5", "highschool6", "highschool7", "highschool8", "highschool9", "highschool10", "figures", "college1M", "college2M", "college3M", "college4M", "college5M", "college6M", "college7M", "college8M", "college9M", "college10M", "highschool1M", "highschool2M", "highschool3M", "highschool4M", "highschool5M", "highschool6M", "highschool7M", "highschool8M", "highschool9M", "highschool10M", "figuresM"].includes(this.id);
    })
    .transition().duration(500).style("opacity", 0);
  });
// // End Scrollytelling Intro //


// Start of Question Section //

// Hide question swithces
d3.selectAll("#q1-2-desktop, #text-2, #path-2, #text-3, #path-3, .check1, .check2, #text-2M, #q1-2-mobile, #text-5, #path-5, #text-6, #path-6, #q2-2-desktop, .check3, .check4, #text-6M, #q2-2-mobile, #q3-2-desktop, #text-8, #path-8, .check5, .check6, #text-8M, #q3-2-mobile, .check7, .check8, #text-10, #path-10, #q4-2-desktop, #text-10M, #q4-2-mobile").style('opacity', 0);

// Set up condition for questions 2-4
let q1Selection = null;

document.getElementById('q1-1').addEventListener('click', function() {
  q1Selection = 'yes';
  console.log(q1Selection);
});
document.getElementById('q1-2').addEventListener('click', function() {
  q1Selection = 'no';
  console.log(q1Selection);
});


// Update content based on button clicked
function updateContent(q1Selection, sectionId) {

    // show/hide response messages based on section clicked
    if (sectionId === 'q1-1') {
      document.getElementById('q1-yes-response').classList.remove('hidden');
      document.getElementById('q1-no-response').classList.add('hidden');
      d3.selectAll("#text-1, #path-1, .check2, #text-1M").transition().duration(700).style('opacity', 0);
      d3.selectAll("#text-2, #path-2, #text-3, #path-3, #q1-2-desktop, #q1-2-mobile, .check1, #text-2M").transition().duration(700).style('opacity', 1);
      // reset sections 2-4
      d3.selectAll(".check3, .check4, .check5, .check6, .check7, .check8, #text-5, #path-5, #text-6, #path-6, #q2-2-desktop, #q2-2-mobile, #text-6M, #text-8, #path-8, #text-9, #path-9, #q3-2-desktop, #q3-2-mobile, #text-9M, #text-10, #path-10, #q4-2-desktop, #q4-2-mobile, #text-10M").style('opacity', 0);
      d3.selectAll("#text-4, #path-4, #q2-1-desktop, #q2-1-mobile, #text-4M, #text-7, #path-7, #q3-1-desktop, #q3-1-mobile, #text-7M, #text-9, #path-9, #q4-1-desktop, #q4-1-mobile, #text-9M").style('opacity', 1);
      d3.selectAll("#q2-yes-response-1, #q2-yes-response-2, #q2-no-response-1, #q2-no-response-2, #q3-yes-response-1, #q3-yes-response-2, #q3-no-response-1, q3-no-response-2, #q4-yes-response-1, #q4-yes-response-2, #q4-no-response-1, q4-no-response-2").attr('class', 'hidden');
    } else if (sectionId === 'q1-2') {
      document.getElementById('q1-no-response').classList.remove('hidden');
      document.getElementById('q1-yes-response').classList.add('hidden');
      d3.selectAll("#text-1, #path-1, .check1, #text-1M").transition().duration(700).style('opacity', 0);
      d3.selectAll("#text-2, #path-2, #text-3, #path-3, #q1-2-desktop, #q1-2-mobile, .check2, #text-2M").transition().duration(700).style('opacity', 1);
      // reset sections 2-4
      d3.selectAll(".check3, .check4, .check5, .check6, .check7, .check8, #text-5, #path-5, #text-6, #path-6, #q2-2-desktop, #q2-2-mobile, #text-6M, #text-8, #path-8, #text-9, #path-9, #q3-2-desktop, #q3-2-mobile, #text-9M, #text-10, #path-10, #q4-2-desktop, #q4-2-mobile, #text-10M").style('opacity', 0);
      d3.selectAll("#text-4, #path-4, #q2-1-desktop, #q2-1-mobile, #text-4M, #text-7, #path-7, #q3-1-desktop, #q3-1-mobile, #text-7M, #text-9, #path-9, #q4-1-desktop, #q4-1-mobile, #text-9M").style('opacity', 1);
      d3.selectAll("#q2-yes-response-1, #q2-yes-response-2, #q2-no-response-1, #q2-no-response-2, #q3-yes-response-1, #q3-yes-response-2, #q3-no-response-1, q3-no-response-2, #q4-yes-response-1, #q4-yes-response-2, #q4-no-response-1, q4-no-response-2").attr('class', 'hidden');
    } else if (sectionId === 'q2-1') {
      if (q1Selection === 'yes') {
        // show response message 1 for q2 if user answered yes to q1
        document.getElementById('q2-no-response-1').classList.remove('hidden');
        d3.selectAll('#q2-yes-response-1, #q2-yes-response-2, #q2-no-response-2').attr('class', 'hidden');
      } else {
        // show response message 2 for q2 if user answered no to q1
        document.getElementById('q2-no-response-2').classList.remove('hidden');
        d3.selectAll('#q2-yes-response-1, #q2-yes-response-2, #q2-no-response-1').attr('class', 'hidden');
      }
      d3.selectAll("#text-4, #path-4, .check4, #q2-1-desktop, #q2-1-mobile, #text-4M").transition().duration(700).style('opacity', 0);
      d3.selectAll("#text-5, #path-5, #text-6, #path-6, .check3, #q2-2-desktop, #q2-2-mobile, #text-6M").transition().duration(700).style('opacity', 1);
    } else if (sectionId === 'q2-2') {
      if (q1Selection === 'yes') {
        // show response message 1 for q2 if user answered yes to q1
        document.getElementById('q2-yes-response-1').classList.remove('hidden');
        d3.selectAll('#q2-yes-response-2, #q2-no-response-1, #q2-no-response-2').attr('class', 'hidden');
      } else {
        // show response message 2 for q2 if user answered no to q1
        document.getElementById('q2-yes-response-2').classList.remove('hidden');
        d3.selectAll('#q1-yes-response-2, #q2-no-response-1, #q2-no-response-2').attr('class', 'hidden');
      }
      d3.selectAll("#text-4, #path-4, .check3, #q2-1-desktop, #q2-1-mobile, #text-4M").transition().duration(700).style('opacity', 0);
      d3.selectAll("#text-5, #path-5, #text-6, #path-6, .check4, #q2-2-desktop, #q2-2-mobile, #text-6M").transition().duration(700).style('opacity', 1);
    } else if (sectionId === 'q3-1') {
      if (q1Selection === 'yes') {
        // show response message 1 for q3 if user answered yes to q1
        document.getElementById('q3-no-response-1').classList.remove('hidden');
        d3.selectAll('#q3-yes-response-1, #q3-yes-response-2, #q3-no-response-2').attr('class', 'hidden');
      } else {
        // show response message 2 for q3 if user answered no to q1
        document.getElementById('q3-no-response-2').classList.remove('hidden');
        d3.selectAll('#q3-yes-response-1, #q3-yes-response-2, #q3-no-response-1').attr('class', 'hidden');
      }
      d3.selectAll("#text-7, #path-7, .check6, #q3-1-desktop, #q3-1-mobile, #text-7M").transition().duration(700).style('opacity', 0);
      d3.selectAll("#text-8, #path-8, #text-9, #path-9, .check5, #q3-2-desktop, #q3-2-mobile, #text-9M").transition().duration(700).style('opacity', 1);
    } else if (sectionId === 'q3-2') {
      if (q1Selection === 'yes') {
        // show response message 1 for q3 if user answered yes to q1
        document.getElementById('q3-yes-response-1').classList.remove('hidden');
        d3.selectAll('#q3-yes-response-2, #q3-no-response-1, #q3-no-response-2').attr('class', 'hidden');
      } else {
        // show response message 2 for q3 if user answered no to q1
        document.getElementById('q3-yes-response-2').classList.remove('hidden');
        d3.selectAll('#q1-yes-response-2, #q3-no-response-1, #q3-no-response-2').attr('class', 'hidden');
      }
      d3.selectAll("#text-7, #path-7, .check5, #q3-1-desktop, #q3-1-mobile, #text-7M").transition().duration(700).style('opacity', 0);
      d3.selectAll("#text-8, #path-8, #text-9, #path-9, .check6, #q3-2-desktop, #q3-2-mobile, #text-9M").transition().duration(700).style('opacity', 1);
    } else if (sectionId === 'q4-1') {
      if (q1Selection === 'yes') {
      // show response message 1 for q4 if user answered yes to q1
      document.getElementById('q4-no-response-1').classList.remove('hidden');
      d3.selectAll('#q4-yes-response-1, #q4-yes-response-2, #q4-no-response-2').attr('class', 'hidden');
      } else {
      // show response message 2 for q4 if user answered no to q1
      document.getElementById('q4-no-response-2').classList.remove('hidden');
      d3.selectAll('#q4-yes-response-1, #q4-yes-response-2, #q4-no-response-1').attr('class', 'hidden');
      }
      d3.selectAll("#text-9, #path-9, .check8, #q4-1-desktop, #q4-1-mobile, #text-9M").transition().duration(700).style('opacity', 0);
      d3.selectAll("#text-10, #path-10, .check7, #q4-2-desktop, #q4-2-mobile, #text-10M").transition().duration(700).style('opacity', 1);
      } else if (sectionId === 'q4-2') {
      if (q1Selection === 'yes') {
      // show response message 1 for q4 if user answered yes to q1
      document.getElementById('q4-yes-response-1').classList.remove('hidden');
      d3.selectAll('#q4-yes-response-2, #q4-no-response-1, #q4-no-response-2').attr('class', 'hidden');
      } else {
      // show response message 2 for q4 if user answered no to q1
      document.getElementById('q4-yes-response-2').classList.remove('hidden');
      d3.selectAll('#q1-yes-response-2, #q4-no-response-1, #q4-no-response-2').attr('class', 'hidden');
      }
      d3.selectAll("#text-9, #path-9, .check7, #q4-1-desktop, #q4-1-mobile, #text-9M").transition().duration(700).style('opacity', 0);
      d3.selectAll("#text-10, #path-10, .check8, #q4-2-desktop, #q4-2-mobile, #text-10M").transition().duration(700).style('opacity', 1);
      }
  };

// add event listeners for section buttons
document.querySelectorAll('section[id^="q"]').forEach(section => {
  // click event listener
  section.addEventListener('click', () => {
    const sectionId = section.id;
    updateContent(q1Selection, sectionId);
  });

  // keydown event listener
  section.addEventListener('keydown', (event) => {
    if (event.code === 'Enter' || event.code === 'Space') {
      const sectionId = section.id;
      updateContent(q1Selection, sectionId);
    }
  });
});