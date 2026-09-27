export default function YourForm() {
  return (
    <>
      <h4>Student Profile</h4>
      <form id="wd-your-form">
        <h5>About me</h5>
        <label htmlFor="wd-your-first-name">First name: </label>
        <input id="wd-your-first-name" defaultValue="Shriya" placeholder="First name" />
        <br />
        <label htmlFor="wd-your-last-name">Last name: </label>
        <input id="wd-your-last-name" defaultValue="Mandala" placeholder="Last name" />
        <br />
        <label htmlFor="wd-your-student-id">Student ID: </label>
        <input id="wd-your-student-id" type="password" placeholder="002054124" />
        <br />
        <label htmlFor="wd-your-bio">Why I am taking this course:</label>
        <br />
        <textarea
          id="wd-your-bio"
          cols={50}
          rows={5}
          defaultValue="Sample bio: I am a student in the computer science program and want to learn how to build full-stack web applications."
        />

        <h5>Class standing</h5>
        <input type="radio" name="wd-your-standing" id="wd-your-freshman" />
        <label htmlFor="wd-your-freshman">Freshman</label>
        <br />
        <input type="radio" name="wd-your-standing" id="wd-your-sophomore" />
        <label htmlFor="wd-your-sophomore">Sophomore</label>
        <br />
        <input type="radio" name="wd-your-standing" id="wd-your-junior" />
        <label htmlFor="wd-your-junior">Junior</label>
        <br />
        <input type="radio" name="wd-your-standing" id="wd-your-senior" />
        <label htmlFor="wd-your-senior">Senior</label>
        <br />
        <input type="radio" name="wd-your-standing" id="wd-your-graduate" defaultChecked />
        <label htmlFor="wd-your-graduate">Graduate</label>

        <h5>Enrollment</h5>
        <input type="radio" name="wd-your-enrollment" id="wd-your-full-time" defaultChecked />
        <label htmlFor="wd-your-full-time">Full-time</label>
        <br />
        <input type="radio" name="wd-your-enrollment" id="wd-your-part-time" />
        <label htmlFor="wd-your-part-time">Part-time</label>

        <h5>Interests</h5>
        <input type="checkbox" id="wd-your-frontend" defaultChecked />
        <label htmlFor="wd-your-frontend">Frontend development</label>
        <br />
        <input type="checkbox" id="wd-your-backend" defaultChecked />
        <label htmlFor="wd-your-backend">Backend development</label>
        <br />
        <input type="checkbox" id="wd-your-ml" />
        <label htmlFor="wd-your-ml">Machine learning</label>
        <br />
        <input type="checkbox" id="wd-your-databases" />
        <label htmlFor="wd-your-databases">Databases</label>

        <h5>Program</h5>
        <label htmlFor="wd-your-major">Major: </label>
        <select id="wd-your-major" defaultValue="CS">
          <option value="CS">Computer Science</option>
          <option value="DS">Data Science</option>
          <option value="IS">Information Systems</option>
          <option value="SE">Software Engineering</option>
        </select>
        <br />
        <label htmlFor="wd-your-topics">Topics I want to deepen this term:</label>
        <br />
        <select id="wd-your-topics" multiple defaultValue={["REACT", "NODE"]}>
          <option value="REACT">React and Next.js</option>
          <option value="NODE">Node.js and Express</option>
          <option value="MONGO">MongoDB</option>
          <option value="SQL">SQL and database design</option>
          <option value="DEPLOY">Deployment</option>
        </select>

        <h5>Details</h5>
        <label htmlFor="wd-your-email">School email: </label>
        <input type="email" id="wd-your-email" defaultValue="mandala.sh@northeastern.edu" placeholder="jane@university.edu" />
        <br />
        <label htmlFor="wd-your-grad-year">Expected graduation year: </label>
        <input type="number" id="wd-your-grad-year" defaultValue="2027" min={2026} max={2032} />
        <br />
        <label htmlFor="wd-your-start-date">Program start date: </label>
        <input type="date" id="wd-your-start-date" defaultValue="2026-01-06" min="2020-01-01" max="2030-12-31" />
        <br />
        <label htmlFor="wd-your-excitement">How excited I am about this course (0–10): </label>
        <input type="range" id="wd-your-excitement" defaultValue="8" min="0" max="10" />
        <br />

        <button type="submit" id="wd-your-save">Save</button>
        <button type="button" id="wd-your-cancel">Cancel</button>
      </form>
    </>
  );
}
