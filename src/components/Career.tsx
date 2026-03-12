import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> qualifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B. Tech - Computer Science (DS)</h4>
                <h5>Pranveer Singh Institute of Technology, Kanpur</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              CGPA: 8.1/10. Key coursework: Data Structures & Algorithms, Web 
              Technology, Database Management, Artificial Intelligence, Machine 
              Learning, Operating Systems, and Computer Networks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>High School Education</h4>
                <h5>MJRP Public School, Ghazipur</h5>
              </div>
              <h3>Pre-2023</h3>
            </div>
            <p>
              Completed earlier education with a strong foundation in science 
              and mathematics, actively participating in extracurriculars like 
              debate competitions where I won over 5 medals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Coding & Certifications</h4>
                <h5>Leetcode, Codechef, GFG</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Satisfactorily answered 500+ Problems on Leetcode and earned 5 badges. 
              Solved over 100 problems on Codechef & GeeksForGeeks. Certifications 
              include Python Programming from Infosys and Cybersecurity from IBM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
