// Scrollytelling Intro //
const Slide0 = d3.select("#g-slide-0-box");
const Slide1 = d3.select("#g-slide-1-box");
const Slide2 = d3.select("#g-slide-2-box");
const Slide3 = d3.select("#g-slide-3-box");
const Slide4 = d3.select("#g-slide-4-box");
const Slide5 = d3.select("#g-slide-5-box");

document.addEventListener('DOMContentLoaded', function() {
  Slide0.style('opacity', 0)
  .classed('hidden', false)
  .transition().duration(1000).style('opacity', 1);
});

d3.selectAll("#g-slide-1-box, #g-slide-2-box, #g-slide-3-box, #g-slide-4-box, #g-slide-5-box").style('opacity', 0);

// Step Zero
  d3.select("#step-zero").on('stepin', function() {
    Slide0.transition().duration(500).style('opacity', 0)
      .on('end', function() {
        Slide0.attr('class', 'hidden');
        Slide1.classed('hidden', false).transition().duration(1000).style('opacity', 1);
      });
});

// Step One
  d3.select("#step-one").on('stepin', function() {
    Slide1.transition().duration(500).style('opacity', 0)
      .on('end', function() {
        Slide1.attr('class', 'hidden');
        Slide2.classed('hidden', false).transition().duration(1000).style('opacity', 1);
      });
  });

// Step Two
  d3.select("#step-two").on('stepin', function() {
    Slide2.transition().duration(500).style('opacity', 0)
      .on('end', function() {
        Slide2.attr('class', 'hidden');
        Slide3.classed('hidden', false).transition().duration(1000).style('opacity', 1);
      });
  });

// Step Three
d3.select("#step-three").on('stepin', function() {
  Slide3.transition().duration(500).style('opacity', 0)
    .on('end', function() {
      Slide3.attr('class', 'hidden');
      Slide4.classed('hidden', false).transition().duration(1000).style('opacity', 1);
    });
});

// Step Four
  d3.select("#step-four").on('stepin', function() {
    Slide4.transition().duration(500).style('opacity', 0)
      .on('end', function() {
        Slide4.attr('class', 'hidden');
        Slide5.classed('hidden', false).transition().duration(1000).style('opacity', 1);
      });
  });
// End Scrollytelling Intro //











d3.select("#orange-1").style('opacity', 0)
d3.select("#orange-2").style('opacity', 0)
d3.select("#blue-1").style('opacity', 0)
d3.select("#blue-2").style('opacity', 0)
d3.select("#text-2").style('opacity', 0)
d3.select("#path-2").style('opacity', 0)
d3.selectAll(".check1").style('opacity', 0)

// add event listeners to buttons
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const buttonId = button.id;

    // show/hide response messages based on button clicked
    if (buttonId === 'q1-yes') {
      document.getElementById('q1-yes-response').classList.remove('hidden');
      document.getElementById('q1-no-response').classList.add('hidden');
      d3.select("#text-1").transition().duration(500).style('opacity', 0);
      d3.select("#path-1").transition().duration(500).style('opacity', 0);
      d3.select("#text-2").transition().duration(500).style('opacity', 1);
      d3.select("#path-2").transition().duration(500).style('opacity', 1);
      d3.select("#orange-1").transition().duration(500).style('opacity', 0.7);
      d3.select("#orange-2").transition().duration(500).style('opacity', 0.7);
      d3.select("#blue-1").transition().duration(500).style('opacity', 0.7);
      d3.select("#blue-2").transition().duration(500).style('opacity', 0.7);
      d3.selectAll(".check1").transition().duration(500).style('opacity', 1);
    } else if (buttonId === 'q1-no') {
      document.getElementById('q1-no-response').classList.remove('hidden');
      document.getElementById('q1-yes-response').classList.add('hidden');
      d3.select("#text-1").transition().duration(500).style('opacity', 0);
      d3.select("#path-1").transition().duration(500).style('opacity', 0);
      d3.select("#text-2").transition().duration(500).style('opacity', 1);
      d3.select("#path-2").transition().duration(500).style('opacity', 1);
      d3.select("#orange-1").transition().duration(500).style('opacity', 0.7);
      d3.select("#orange-2").transition().duration(500).style('opacity', 0.7);
      d3.select("#blue-1").transition().duration(500).style('opacity', 0.7);
      d3.select("#blue-2").transition().duration(500).style('opacity', 0.7);
      d3.selectAll(".check1").transition().duration(500).style('opacity', 1);
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