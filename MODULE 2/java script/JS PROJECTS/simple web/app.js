function openSection(event, sectionId) {
    // 1. Saare sections ko dhoondo aur unse 'active' class hatao (taake wo chup jayen)
    let sections = document.querySelectorAll('.section');
    sections.forEach(sec => {
        sec.classList.remove('active');
    });

    // 2. Navbar ke saare links se 'active' class hatao (taake orange color hat jaye)
    let navLinks = document.querySelectorAll('.nav-item');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // 3. Jo section click hua hai, uski ID dhoond kar use 'active' class de do (wo show ho jayega)
    document.getElementById(sectionId).classList.add('active');

    // 4. Jis link par click kiya gaya hai, use bhi orange color karne ke liye 'active' class de do
    event.currentTarget.classList.add('active');
}