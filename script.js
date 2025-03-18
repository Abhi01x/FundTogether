// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
  });

  // Modal Functionality
  const startProjectBtn = document.getElementById('startProjectBtn');
  const heroStartProjectBtn = document.getElementById('heroStartProjectBtn');
  const startProjectModal = document.getElementById('startProjectModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const projectForm = document.getElementById('projectForm');

  function openModal() {
    startProjectModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      startProjectModal.querySelector('div').classList.add('scale-100');
      startProjectModal.querySelector('div').classList.remove('scale-95');
    }, 10);
  }

  function closeModal() {
    startProjectModal.querySelector('div').classList.add('scale-95');
    startProjectModal.querySelector('div').classList.remove('scale-100');
    setTimeout(() => {
      startProjectModal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }, 300);
  }

  startProjectBtn.addEventListener('click', openModal);
  heroStartProjectBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);

  // Close modal when clicking outside
  startProjectModal.addEventListener('click', function(e) {
    if (e.target === startProjectModal) {
      closeModal();
    }
  });

  // Form submission
  projectForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const title = document.getElementById('projectTitle').value;
    const description = document.getElementById('projectDescription').value;
    const goal = document.getElementById('fundingGoal').value;
    const category = document.getElementById('projectCategory').value;
    
    if (!title || !description || !goal || !category) {
      alert('Please fill in all fields');
      return;
    }
    
    // Here you would normally send this data to a server
    console.log('Project submitted:', { title, description, goal, category });
    
    // Show success message
    alert('Project created successfully!');
    
    // Reset form and close modal
    projectForm.reset();
    closeModal();
  });

  // Category filtering
  const categoryBtns = document.querySelectorAll('.category-btn');
  const projectCards = document.querySelectorAll('.project-card');

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons
      categoryBtns.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      const category = this.getAttribute('data-category');
      
      // Filter projects
      projectCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = 'block';
          // Add animation
          card.classList.add('animate-fadeIn');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Animate progress bars on scroll
  const progressBars = document.querySelectorAll('.project-card .bg-blue-600');
  
  function animateProgressBars() {
    progressBars.forEach(bar => {
      const width = bar.style.width;
      bar.style.setProperty('--progress-width', width);
      bar.style.width = '0';
      
      setTimeout(() => {
        bar.classList.add('animate-progress');
      }, 300);
    });
  }
  
  // Run once on page load
  animateProgressBars();
  
  // Add hover effects to project cards
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.querySelector('.bg-blue-500').classList.add('pulse-on-hover');
    });
    
    card.addEventListener('mouseleave', function() {
      this.querySelector('.bg-blue-500').classList.remove('pulse-on-hover');
    });
  });
});
