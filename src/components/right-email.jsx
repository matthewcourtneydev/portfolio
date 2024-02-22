import React from 'react';

const RightEmail = () => {
    function sendEmail() {
        window.location = "mailto:mdcdev23@gmail.com?subject=Inquiry About Web Development Services&body=Dear Matthew, %0D%0A %0D%0A I hope this email finds you well. I recently came across your impressive web development portfolio and was thoroughly impressed by the quality and creativity of your work. I am reaching out because I am in need of a skilled web developer for [describe the project or type of work you're interested in]. After reviewing your portfolio, I believe your expertise would be a perfect fit for my project. %0D%0A %0D%0A I would love to discuss the details of the project further and learn more about your availability and rates. Could we schedule a call or meeting to explore this opportunity in more depth? %0D%0A %0D%0A Looking forward to hearing from you soon. Best regards, %0D%0A %0D%0A [Sender's Name] [Sender's Contact Information]";
      }
      
    return (
        <>
        <div id="vertical-email">
           <span onClick={sendEmail} >matthewcourtneydev@gmail.com</span>
           <div className="vertical-line-left-side"></div>
        </div>
        </>
    );
}

export default RightEmail;
