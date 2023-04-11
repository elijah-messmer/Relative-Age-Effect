// Scrollytelling Intro //
const title = d3.select("#g-ai1-5");
const slide0 = d3.select("#g-ai1-6");
const slide1 = d3.select("#g-ai1-2");
const slide2 = d3.select("#g-ai1-3");
const slide3 = d3.select("#g-ai1-1");
const slide4 = d3.select("#g-ai1-4");
const introSVG = d3.select("#g-v2-intro-text-Desktop-intro-Layer-img"); 
const headerImg = d3.select("#g-v2-intro-text-Desktop-intro-img");

//Display landing image
document.addEventListener('DOMContentLoaded', function() {
  headerImg.transition().delay(500).duration(1000).style('opacity', 1);
  introSVG.transition().delay(1000).transition().duration(1000).style('opacity', 1);
  title.transition().delay(1500).duration(1000).style('opacity', 1);
});

// Step Zero
  d3.select("#step-zero").on('stepin', function() {
    slide0.transition().duration(500).style('opacity', 0);
    title.transition().duration(500).style('opacity', 1);
});

// Step One
  d3.select("#step-one").on('stepin', function() {
    title.transition().duration(500).style('opacity', 0);
    slide1.transition().duration(500).style('opacity', 0);
    slide0.transition().delay(500).duration(500).style('opacity', 1);
    d3.select("#g-v2-intro-text-box").selectAll("g, #college5, #problemchild")
    .filter(function() {
      return this.id !== "college1" && this.id !== "highschool1" && this.id !== "figures";
    })
    .transition().duration(500).style("opacity", 1);
    d3.select("#college1").transition().duration(500).style("fill", "black");
  d3.select("#highschool1").transition().duration(500).style("fill", "black");
  });

// Step Two
function updateGOpacity() {
  d3.select("#g-v2-intro-text-box").selectAll("g, #college5, #problemchild")
    .filter(function() {
      return this.id !== "college1" && this.id !== "highschool1" && this.id !== "figures";
    })
    .transition().duration(500).style("opacity", 0.25);
  d3.select("#college1").transition().duration(500).style("fill", "#02C7D1");
  d3.select("#highschool1").transition().duration(500).style("fill", "#FF6701");
}

  d3.select("#step-two").on('stepin', function() {
    slide0.transition().duration(500).style('opacity', 0);
    slide2.transition().duration(500).style('opacity', 0);
    slide1.transition().delay(500).duration(500).style('opacity', 1);
    updateGOpacity();
  });

// Step Three
d3.select("#step-three").on('stepin', function() {
    slide1.transition().duration(500).style('opacity', 0);
    slide3.transition().duration(500).style('opacity', 0);
    slide2.transition().delay(500).duration(500).style('opacity', 1);
    d3.select("#g-v2-intro-text-box").selectAll("g, #problemchild, #college2, #college3, #college4, #college5, #college6, #college7, #college8, #college9, #college10, #highschool2, #highschool3, #highschool4, #highschool5, #highschool6, #highschool7, #highschool8, #highschool9, #highschool10")
    .filter(function() {
      return this.id !== "college1" && this.id !== "highschool1" && this.id !== "figures";
    })
    .transition().duration(500).style("opacity", 1).style("fill", "black");
});

// Step Four
  d3.select("#step-four").on('stepin', function() {
    slide2.transition().duration(500).style('opacity', 0);
    slide4.transition().duration(500).style('opacity', 0);
    slide3.transition().delay(500).duration(500).style('opacity', 1);
    d3.select("#g-v2-intro-text-box").selectAll("g, #problemchild")
    .filter(function() {
      return this.id !== "figures";
    })
    .transition().duration(500).style("opacity", 0.25);
    d3.selectAll("#college1, #college2, #college3, #college4, #college5, #college6, #college7, #college8, #college9, #college10").transition().duration(500).style("fill", "#02C7D1");
    d3.selectAll("#highschool1, #highschool2, #highschool3, #highschool4, #highschool5, #highschool6, #highschool7, #highschool8, #highschool9, #highschool10").transition().duration(500).style("fill", "#FF6701");
  });

// Step Five
  d3.select("#step-five").on('stepin', function() {
    slide3.transition().duration(500).style('opacity', 0);
    slide4.transition().delay(500).duration(500).style('opacity', 1);
    d3.select("#g-v2-intro-text-box").selectAll("g, #problemchild")
    .filter(function() {
      return !["college1", "college2", "college3", "college4", "college5", "college6", "college7", "college8", "college9", "college10", "highschool1", "highschool2", "highschool3", "highschool4", "highschool5", "highschool6", "highschool7", "highschool8", "highschool9", "highschool10", "figures"].includes(this.id);
    })
    .transition().duration(500).style("opacity", 0);
  });
// // End Scrollytelling Intro //

// Start of Question Section //


d3.select("#brush-img").style('opacity', 0);
d3.select("#text-2").style('opacity', 0)
d3.select("#path-2").style('opacity', 0)
d3.select("#text-3").style('opacity', 0)
d3.select("#path-3").style('opacity', 0)
d3.selectAll(".check1").style('opacity', 0)
d3.selectAll(".check2").style('opacity', 0)

const button = document.querySelector('#q1-1');
const blueTest = document.querySelector('#blueTest');

button.addEventListener('click', () => {
  blueTest.style.animationPlayState = 'running';
});

// add event listeners to buttons
document.querySelectorAll('section[id^="q1-"]').forEach(section => {
  section.addEventListener('click', () => {
    const sectionId = section.id;

    // show/hide response messages based on section clicked
    if (sectionId === 'q1-1') {
      document.getElementById('q1-yes-response').classList.remove('hidden');
      document.getElementById('q1-no-response').classList.add('hidden');
      d3.select("#text-1").transition().duration(500).style('opacity', 0);
      d3.select("#path-1").transition().duration(500).style('opacity', 0);
      d3.select("#text-2").transition().duration(500).style('opacity', 1);
      d3.select("#path-2").transition().duration(500).style('opacity', 1);
      d3.select("#text-3").transition().duration(500).style('opacity', 1);
      d3.select("#path-3").transition().duration(500).style('opacity', 1);
      d3.select("#brush-img").transition().duration(500).style('opacity', 1);
      d3.selectAll(".check1").transition().duration(500).style('opacity', 1);
      d3.selectAll(".check2").style('opacity', 0);
    } else if (sectionId === 'q1-2') {
      document.getElementById('q1-no-response').classList.remove('hidden');
      document.getElementById('q1-yes-response').classList.add('hidden');
      d3.select("#text-1").transition().duration(500).style('opacity', 0);
      d3.select("#path-1").transition().duration(500).style('opacity', 0);
      d3.select("#text-2").transition().duration(500).style('opacity', 1);
      d3.select("#path-2").transition().duration(500).style('opacity', 1);
      d3.select("#text-3").transition().duration(500).style('opacity', 1);
      d3.select("#path-3").transition().duration(500).style('opacity', 1);
      d3.select("#brush-img").transition().duration(500).style('opacity', 1);
      d3.selectAll(".check2").transition().duration(500).style('opacity', 1);
      d3.selectAll(".check1").style('opacity', 0);
    } else if (buttonId === 'q2-yes') {
      document.getElementById('q2-yes-response').classList.remove('hidden');
      document.getElementById('q2-no-response').classList.add('hidden');
    } else if (buttonId === 'q2-no') {
      document.getElementById('q2-no-response').classList.remove('hidden');
      document.getElementById('q2-yes-response').classList.add('hidden');
    } else if (buttonId === 'q3-yes') {
      document.getElementById('q3-yes-response').classList.remove('hidden');
      document.getElementById('q3-no-response').classList.add('hidden');
    } else if (buttonId === 'q3-no') {
      document.getElementById('q3-no-response').classList.remove('hidden');
      document.getElementById('q3-yes-response').classList.add('hidden');
    } else if (buttonId === 'q4-yes') {
      document.getElementById('q4-yes-response').classList.remove('hidden');
      document.getElementById('q4-no-response').classList.add('hidden');
    } else if (buttonId === 'q4-no') {
      document.getElementById('q4-no-response').classList.remove('hidden');
      document.getElementById('q4-yes-response').classList.add('hidden');
    }
  });
});