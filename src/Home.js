import Menu from "./Menu";

function Home()
{
    const get=localStorage.getItem("Username")
    return(
        <>
        <Menu/>
        <div style={{fontSize:"17px"}}>
        <h3 style={{paddingTop:"5%"}}>Dear {get},</h3>    
        <p>
        A student data website is an online platform designed to efficiently manage and organize information related to students within an educational institution. It serves as a centralized hub for various stakeholders, including students, teachers, administrators, and parents. The key features of a student data website typically include:
        </p>
        <ol>
            <li>Attendance Tracking: The platform allows for the recording and monitoring of student attendance, providing an overview of their presence in classes and any patterns of absenteeism.</li>
            <li>Communication Tools: Integrated communication tools enable seamless interaction between students, teachers, and parents. This may include messaging systems, announcements, and discussion forums</li>
            <li>Course Management: The platform assists in managing course-related information, including class schedules, syllabi, and resources. It may also support online submission of assignments and assessments.</li>
            <li>Security and Privacy: Robust security measures are implemented to protect sensitive student information, ensuring compliance with privacy regulations and safeguarding against unauthorized access.</li>
            <li>User Profiles: Each student, teacher, and administrative staff member has a personalized profile that contains relevant information such as contact details, academic history, and achievements.</li>
        </ol>
        <hr/>
        </div>
        </>
    )
}
export default Home;