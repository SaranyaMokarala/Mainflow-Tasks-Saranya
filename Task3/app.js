var BTech={
    "CourseDetails":"<h2>Bachelor of Technology</h2><h3>Overview</h3><p>The Bachelor of Technology (B.Tech) is a four-year undergraduate degree program designed to equip students with a solid foundation in technology and engineering principles. The program combines theoretical knowledge with practical application to prepare students for a variety of careers in engineering and technology sectors.</p>"
    +"<h3>Admission Criteria</h3><p>To be eligible for the B.Tech program, candidates must meet the following criteria:</p>"
    +"<ul><li>Successful completion of higher secondary education (10+2) with Physics, Chemistry, and Mathematics.</li><li>Qualifying score in entrance exams such as JEE Main/Advanced, state-level engineering entrance exams, or university-specific exams.</li></ul>"
    +"<h3>Facilities</h3><p>Our campus offers state-of-the-art facilities to support students' learning and development:</p><ul><li>Modern laboratories with the latest equipment</li><li>Well-stocked library with a vast collection of books and journals</li><li>Advanced computer labs with high-speed internet</li><li>Dedicated research centers and innovation labs</li><li>Dedicated research centers and innovation labs</li></ul>"
    +"<h3>Career Prospects</h3><p>Graduates of the B.Tech program have a wide range of career opportunities in various sectors including:</p><ul><li>Software Development</li><li>Electronics and Telecommunication</li><li>Mechanical and Manufacturing Engineering</li><li>Civil and Structural Engineering</li><li>Project Management</li></ul>"
    
}

var BSc = {
    "CourseDetails": "<h2>Bachelor of Science</h2><h3>Overview</h3><p>The Bachelor of Science (B.Sc) is a three-year undergraduate degree program designed to provide students with a strong foundation in scientific principles and methodologies. The program covers a wide range of scientific disciplines, preparing students for careers in research, industry, and academia.</p>"
    + "<h3>Admission Criteria</h3><p>To be eligible for the B.Sc program, candidates must meet the following criteria:</p>"
    + "<ul><li>Successful completion of higher secondary education (10+2) with a minimum percentage as specified by the institution, usually with a focus on science subjects.</li><li>Qualifying score in entrance exams, if applicable.</li></ul>"
    + "<h3>Facilities</h3><p>Our campus offers state-of-the-art facilities to support students' learning and development:</p>"
    + "<ul><li>Modern laboratories equipped with advanced instruments</li><li>Well-stocked library with a comprehensive collection of scientific literature</li><li>Advanced computer labs with high-speed internet</li><li>Dedicated research centers and innovation labs</li><li>On-campus accommodation and dining facilities</li><li>Sports and recreation facilities</li></ul>"
    + "<h3>Career Prospects</h3><p>Graduates of the B.Sc program have a wide range of career opportunities in various sectors including:</p>"
    + "<ul><li>Research and Development</li><li>Healthcare and Medicine</li><li>Environmental Science</li><li>Biotechnology</li><li>Information Technology</li><li>Education and Academia</li><li>Industrial Applications</li></ul>"
}

var BCom = {
    "CourseDetails": "<h2>Bachelor of Commerce</h2><h3>Overview</h3><p>The Bachelor of Commerce (B.Com) is a three-year undergraduate degree program designed to impart foundational knowledge in commerce, accounting, finance, and business principles. The program blends theoretical learning with practical applications to prepare students for careers in various sectors of commerce and finance.</p>"
    + "<h3>Admission Criteria</h3><p>To be eligible for the B.Com program, candidates must meet the following criteria:</p>"
    + "<ul><li>Successful completion of higher secondary education (10+2) with a minimum percentage as specified by the institution.</li><li>Preference may be given to students with a background in commerce or related subjects.</li><li>Qualifying score in entrance exams, if applicable.</li></ul>"
    + "<h3>Facilities</h3><p>Our campus offers state-of-the-art facilities to support students' learning and development:</p>"
    + "<ul><li>Modern classrooms with audio-visual aids</li><li>Well-stocked library with a vast collection of books and journals</li><li>Advanced computer labs with high-speed internet</li><li>Dedicated research centers and innovation labs</li><li>On-campus accommodation and dining facilities</li><li>Sports and recreation facilities</li></ul>"
    + "<h3>Career Prospects</h3><p>Graduates of the B.Com program have a wide range of career opportunities in various sectors including:</p>"
    + "<ul><li>Accounting and Auditing</li><li>Banking and Financial Services</li><li>Insurance</li><li>Marketing and Sales</li><li>Human Resource Management</li><li>Business Consultancy</li><li>Corporate Law</li><li>Entrepreneurship</li></ul>"
}




var BBA={
    "CourseDetails":""
}

function CoursePreview()
{
    const name=document.getElementById("CourseName").value;
    const Preview=document.getElementById("Preview");
    Preview.innerHTML=""
    if(name=="B.Tech")
        Preview.innerHTML=BTech.CourseDetails;
    else if(name=="B.Sc")
        Preview.innerHTML=BSc.CourseDetails;
    else if(name=="B.Com")
        Preview.innerHTML=BCom.CourseDetails;
}