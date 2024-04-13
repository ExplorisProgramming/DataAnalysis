const filterButtons = document.querySelectorAll('.filter-item');

filterButtons.forEach(button => {
  button.addEventListener('click', handleFilterClick);
});

function handleFilterClick(event) {
  const selectedFilter = event.target.dataset.filter;
  const postBoxes = document.querySelectorAll('.post-box');

  // Remove active class from all buttons
  filterButtons.forEach(button => button.classList.remove('active-filter'));

  // Add active class to the clicked button
  event.target.classList.add('active-filter');

//   postBoxes.forEach(postBox => {
//     const postCategories = postBox.classList; 
    
//     postBox.style.display = selectedFilter === 'all' || postCategories.contains(selectedFilter) ? 'block' : 'none';
//   });


  for(let k = 0; k < postBoxes.length; k++){
    let postCategories = postBoxes[k].classList;

    if(selectedFilter == 'all' || postCategories.contains(selectedFilter)){
        postBoxes[k].style.display = 'block';
    }
    else {
         postBoxes[k].style.display = 'none';
    }
  }
}

// Trigger initial filtering (optional)
// const activeFilter = document.querySelector('.active-filter');
// activeFilter.addEventListener('click', handleFilterClick);
