document.addEventListener("DOMContentLoaded", function () {

  //help button
  let helpbuttonid = this.getElementById("helpbuttonid");
  let helpbutton = document.createElement("button");
  helpbutton.innerHTML = "<img src='../static/images/icon_pics/faq.png' style=' width:30px; height:30px;'>";
  helpbutton.classList.add("helpbuttoncss");
  helpbutton.style.border = 'none';
  helpbutton.style.background = 'none'
  helpbutton.style.boxShadow = 'none'
  helpbuttonid.appendChild(helpbutton);
  const imagePanel = document.getElementById("image-panel");
  const imagePanelImg = document.getElementById("image-panel-img");
  const closeButton = document.getElementById("close-button");
  
  // Set initial position of the image panel
  let posX = 0;
  let posY = 0;

  // Set a flag indicating whether the user is dragging the image
  let isDragging = false;

  helpbutton.addEventListener("click", function() {
    usersfx();
    
    imagePanel.style.display = "block";
    imagePanelImg.src = "../static/images/helpimage.png  "; /* replace with the URL of the image you want to display */
  });
  
  // Select the image panel element
  const imagePanelCss = document.querySelector('.image-panel-css');

  imagePanelCss.addEventListener('mousedown', (event) => {
    // Set the flag to true
    isDragging = true;
  
    // Set the initial position of the image panel
    posX = event.clientX - imagePanelCss.offsetLeft;
    posY = event.clientY - imagePanelCss.offsetTop;
  });

  window.addEventListener('mousemove', (event) => {
    // If the user is not dragging, do nothing
    if (!isDragging) return;
 
    // Calculate the new position of the image panel
    const newX = event.clientX - posX;
    const newY = event.clientY - posY;
  
    // Set the new position of the image panel
    imagePanelCss.style.left = newX + 'px';
    imagePanelCss.style.top = newY + 'px';
  });

  window.addEventListener('mouseup', () => {
    // Set the flag to false
    isDragging = false;
  });

  // Add a mouse wheel event listener to the image panel
  imagePanelCss.addEventListener('wheel', (event) => {
    // Prevent the page from scrolling
    event.preventDefault();

    // Get the current scale value
    const currentScale = parseFloat(window.getComputedStyle(imagePanelCss).transform.split('(')[1].split(')')[0]);

    // Calculate the new scale value based on the wheel delta
    const newScale = event.deltaY < 0? currentScale * 1.1 : currentScale / 1.1;

    // Set the new scale value
    imagePanelCss.style.transform = `translate(-50%, -50%) scale(${newScale})`;
  });

  closeButton.addEventListener("click", function() {
    usersfx();

    imagePanel.style.display = "none";
  });

  let fontSizeDefault = 20
  let chatbotfont = document.getElementsByClassName("bot-message");
  let chatuserfont = document.getElementsByClassName("user-message");
  let buttonsfont = document.getElementsByTagName("button");
  let fontSize = document.getElementById("fontSizeid");
  fontSize.innerHTML = fontSizeDefault
    fontSize.style.fontSize = fontSizeDefault + 'px'
    // fontSize.style.border = 'none'
    // fontSize.style.background = 'none'
    // fontSize.style.boxShadow = 'none'


  //increase font
  let fontincreaseid = this.getElementById("fontEnlarge-button");
  let fontincreaseicon = document.createElement("button");
  fontincreaseicon.innerHTML = "<img src='static/images/fontUp.png' style=' width:32px; height:32px;'>";
  fontincreaseicon.classList.add("magnifyingcss");
  fontincreaseicon.style.border = 'none';
  fontincreaseicon.style.padding = '5px'
  fontincreaseicon.style.background = 'none'
  fontincreaseicon.style.boxShadow = 'none'
  fontincreaseid.appendChild(fontincreaseicon);

  fontincreaseicon.addEventListener("click", function() {


    usersfx()

    if (fontSizeDefault < 40)
      {
        fontSizeDefault += 2; 

        for (let i = 0; i < chatbotfont.length; i++) {
          if (chatbotfont[i].style.fontSize === "") {
            chatbotfont[i].style.fontSize = fontSizeDefault + "px";
          } else {
            chatbotfont[i].style.fontSize = fontSizeDefault + "px";
            
          }
        }

        for (let i = 0; i < chatuserfont.length; i++) {
          if (chatuserfont[i].style.fontSize === "") {
            chatuserfont[i].style.fontSize = fontSizeDefault + "px";
          } else {
            chatuserfont[i].style.fontSize =  fontSizeDefault + "px";
          } 
        }

        for (let i = 0; i < buttonsfont.length; i++) {
          if (buttonsfont[i].style.fontSize === "") {
            buttonsfont[i].style.fontSize = fontSizeDefault + "px";
          } else {
            buttonsfont[i].style.fontSize =  fontSizeDefault + "px";
          }
        }
      }

      fontSize.innerHTML = fontSizeDefault
      fontSize.style.fontSize = fontSizeDefault
    chatBox.scrollTop = chatBox.scrollHeight;

});



  //decrease font
  let fontdecreaseid = this.getElementById("fontSmaller-button");
  let fontdecreaseicon = document.createElement("button");
  fontdecreaseicon.innerHTML = "<img src='static/images/fontDown.png' style=' width:25px; height:25px;'>";
  fontdecreaseicon.classList.add("magnifyingcss");
  fontdecreaseicon.style.border = 'none';
  fontdecreaseicon.style.padding = '5px'
  fontdecreaseicon.style.background = 'none'
  fontdecreaseicon.style.boxShadow = 'none'
  fontdecreaseid.appendChild(fontdecreaseicon);

  fontdecreaseicon.addEventListener("click", function() {

    usersfx()

    if (fontSizeDefault > 12)
    {
      fontSizeDefault -= 2; 

      for (let i = 0; i < chatbotfont.length; i++) {
        if (chatbotfont[i].style.fontSize === "") {
          chatbotfont[i].style.fontSize = fontSizeDefault + "px";
        } else {
          chatbotfont[i].style.fontSize = fontSizeDefault + "px";
          
        }
      }

      for (let i = 0; i < chatuserfont.length; i++) {
        if (chatuserfont[i].style.fontSize === "") {
          chatuserfont[i].style.fontSize = fontSizeDefault + "px";
        } else {
          chatuserfont[i].style.fontSize =  fontSizeDefault + "px";
        } 
      }

      for (let i = 0; i < buttonsfont.length; i++) {
        if (buttonsfont[i].style.fontSize === "") {
          buttonsfont[i].style.fontSize = fontSizeDefault + "px";
        } else {
          buttonsfont[i].style.fontSize =  fontSizeDefault + "px";
        }
      }
    }
    
    fontSize.innerHTML = fontSizeDefault
    fontSize.style.fontSize = fontSizeDefault
    chatBox.scrollTop = chatBox.scrollHeight;

  });


  //add mainmenu button
  let a = this.getElementById("home-button");
  let mainmenu = document.createElement("button");
  mainmenu.innerHTML = "<img src='static/images/newhome.png' style=' width:30px; height:30px;'> Home";
  mainmenu.classList.add("mainmenu");
  mainmenu.style.border = 'none';
  // mainmenu.style.border = '2px solid white';
  // mainmenu.style.borderRadius = '15px'
  mainmenu.style.padding = '5px'
  mainmenu.style.background = 'none'
  mainmenu.style.boxShadow = 'none'
  mainmenu.style.fontSize = fontSizeDefault + 'px'
  mainmenu.disabled = true;
  a.appendChild(mainmenu);


  function homedisabler(){

    if (!mainmenu.disabled) {

      mainmenu.disabled = true;
    } else {

      mainmenu.disabled = false;
    }

  }
  mainmenu.addEventListener("click", function() {
    test();
    homedisabler();
  });


  //home category buttons
  function test(){
    botsfx();
    removeCourseButtons();
    removeAdmissionButtons();

    var buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
  
    // Type here any suggestions for any type of Buttons
    var buttons = [
      { text: "Courses", action: showCourses, pic: 'static/images/icon_pics/course.png' },
      { text: "Admissions", action: showAdmissions, pic: 'static/images/icon_pics/admission.png'},
      { text: "Schedules", action: showSchedules, pic: 'static/images/icon_pics/sched.png' },
      { text: "Events", action: showEvents, pic: 'static/images/icon_pics/event.png' },
      { text: "Faculty", action: showFaculty, pic: 'static/images/icon_pics/faculty.png' },
      { text: "Location", action: showLocation, pic: 'static/images/icon_pics/location.png' },
      { text: "About Us", action: showAboutUs, pic: 'static/images/icon_pics/about.png' },
    ];
  
    // Append buttons to container
    buttons.forEach(function (button) {
      var buttonElement = document.createElement("button");
      buttonElement.style.fontSize = fontSizeDefault + 'px';
      
      buttonElement.innerHTML = "<img src='" + button.pic + "' style='width:30px; height:30px; margin-right:2px;'> " + button.text ;
      // buttonElement.innerHTML = "<img src='scholar1.png' alt='Course Image' style='width:20px; height:20px; margin-right:5px;'>";
      // buttonElement.innerHTML = "<img src='pic' style='width:20px; height:20px; margin-right:5px;'>";
  
      if(button.text==="Courses" || button.text==="Admissions" || button.text==="Location" || button.text==="Faculty") {
        console.log("Went into courses/admissions/location");
        buttonElement.addEventListener("click", function() {
          sendMessageButton("Show me the  " + button.text); // Send the button text as a user message
          button.action(); // Call the button's action function
      });
      } else {
        // buttonElement.textContent = button.text;
        if (mainmenu.disabled)
        {
          homedisabler();

        }
        buttonElement.setAttribute("id", "button-input");
        buttonElement.addEventListener("click", function() {
          sendMessageButton(button.text); // Send the button text as a user message
          // buttonData.action(); // Call the button's action function
      });
        // sendMessageButton(button.text);
      }

      //buttonElement.addEventListener("click", button.action);
      buttonContainer.appendChild(buttonElement);
    });
  
    // Append buttons container to chat box
    chatBox.appendChild(buttonContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  let chatBox = document.getElementById("chat-box");
  
  let userinputchatbox = document.getElementById("user-input");
    userinputchatbox.placeholder = "Message Arbssy here..."

  let botMessage = document.createElement("p");

  botMessage.innerText = "ARBBS: Greetings Student! How may I help you today? You can click on the buttons or type your concerns on the chat box below! " ;
  botMessage.style.fontSize = fontSizeDefault + 'px';
  botMessage.classList.add("bot-message");
  // Append introduction message to chat box
  chatBox.appendChild(botMessage);
  chatBox.scrollTop = chatBox.scrollHeight;
  test();
  homedisabler();

  function showCourses() {
    botsfx();
    if (mainmenu.disabled)
      {
        homedisabler();

      }
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px'
    botMessage.classList.add("bot-message");
    botMessage.innerText =
      "ARBSS: Here are some common course-related queries...";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    var courseButtons = [
      {
        text: "Tell me more about the courses offered at Centro Escolar University Makati",
        action: showCourse1, 
      },
      { text: "Can I change my Course?", action: showCourse2 },
      {
        text: "Can I customize my course schedule based on my preferences?",
        action: showCourse3,
      },
      {
        text: "Return", action: ReturnButt,
      }
    ];

    // Create and append course query buttons
    var courseButtonContainer = document.createElement("div");
    courseButtonContainer.classList.add("button-container", "course-buttons");
    courseButtons.forEach(function (buttonData) {
      var button = document.createElement("button");
      button.style.fontSize = fontSizeDefault + 'px';
      if(buttonData.text==="Return") {
        console.log("Went into equals courses");
        button.textContent = buttonData.text;
        button.addEventListener("click", buttonData.action);
      } 
      else if(buttonData.text==="Tell me more about the courses offered at Centro Escolar University Makati") {
        button.textContent = buttonData.text;
        button.addEventListener("click", function() {
           // Send the button text as a user message
          sendMessageButton(buttonData.text);
          buttonData.action(); // Call the button's action function
          //button.setAttribute("id", "button-input");
        });
        // showCourse1();
        
        // sendMessageButton(button.text);
      } 
      else {
        button.textContent = buttonData.text;
        button.setAttribute("id", "button-input");
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          // buttonData.action(); // Call the button's action function
        });
      }
      courseButtonContainer.appendChild(button);
    });
    chatBox.appendChild(courseButtonContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
    removeButtons();
  }

  // Course-related answers
  function ReturnButt() {
    botsfx()
    //var chatBox = document.getElementById("chat-box");
    // var botMessage = document.createElement("div");
    // botMessage.classList.add("bot-message");
    // botMessage.innerText =
    //   "ARBSS: We offer a diverse range of courses across different disciplines. You can explore our course catalog on the website or connect with our academic advisors for personalized guidance based on your interests.";
    // chatBox.appendChild(botMessage);
    test()  
    homedisabler();
    removeCourseButtons();
    removeAdmissionButtons();
  }

  function removeCoursesList() {
    botsfx()
    var courseButtons = document.querySelectorAll(".course-buttons");
    courseButtons.forEach(function (button) {
      button.parentNode.removeChild(button);
    });
  }

  //cy fix pwease
  function returnCoursesButt() {
    botsfx();
    //var chatBox = document.getElementById("chat-box");
    // var botMessage = document.createElement("div");
    // botMessage.classList.add("bot-message");
    // botMessage.innerText =
    //   "ARBSS: We offer a diverse range of courses across different disciplines. You can explore our course catalog on the website or connect with our academic advisors for personalized guidance based on your interests.";
    // chatBox.appendChild(botMessage);
 
    removeCourseListButtons();
 
    removeCoursesList();
 
    showCourses();
  }

  function returnSpeCourseButt() {
    botsfx();
    //var chatBox = document.getElementById("chat-box");
    // var botMessage = document.createElement("div");
    // botMessage.classList.add("bot-message");
    // botMessage.innerText =
    //   "ARBSS: We offer a diverse range of courses across different disciplines. You can explore our course catalog on the website or connect with our academic advisors for personalized guidance based on your interests.";
    // chatBox.appendChild(botMessage);
    removeSpeCourseButtons();
    showCourse1();
  }

  function returnToMainAdmissions() {
    botsfx();
    removeCoursesList();
    showAdmissions();
  }

  function returntoCourseLists() {
    botsfx();
    removeCoursesList();
    coursesList();
  }

  function returnToMainLocations() {
    botsfx();
    removeCoursesList();
    showLocation();
  }

  function returnToMainFaculty() {
    botsfx();
    removeCoursesList();
    showFaculty();
  }

  function showCourse1() {
    botsfx();
    // var chatBox = document.getElementById("chat-box");
    //showCourses(); // not working
    
    homedisabler();

    console.log("showcourse1")
    coursesList();
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function coursesList() {
    removeCourseButtons();
    homedisabler();
    botsfx();
    var chatBox = document.getElementById("chat-box"); 
    var botMessage = document.createElement("div"); 
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText =
      "ARBSS: Here are the list of academic departments in CEU Makati";
    chatBox.appendChild(botMessage);
    
    var coursesList = [
      {
        text: "Accountancy and Management Department (AMD)", action: showAMD, 
      },
      { 
        text: "Computer Science and Information Technology Department (CSIT)", action: showCSIT,
      },
      {
        text: "Dentistry Department (DD)", action: showDD,
      },
      {
        text: "Hospitality Management Department (HM)", action: showHM,
      },
      {
        text: "Medical Technology Department (MT)", action: showMT,
      },
      {
        text: "Nursing Department (ND)", action: showND,
      },
      {
        text: "Pharmacy Department (PD)", action: showPD,
      },
      {
        text: "Psychology Department (PSD)", action: showPSD,
      }, 
      {
        text: "Tourism Management Department (TM)", action: showTM,
      }, 
      {
        text: "Return", action: returnCoursesButt,
      }
    ];

    // Create and append course query buttons
    var courseListButtonContainer = document.createElement("div");
    courseListButtonContainer.classList.add("button-container", "course-buttons");
    coursesList.forEach(function (buttonData) {
      var button = document.createElement("button");
      button.style.fontSize = fontSizeDefault + 'px';
      button.textContent = buttonData.text;
      button.addEventListener("click", function() {
        sendMessageButton(buttonData.text);
        buttonData.action();
      });
      
      courseListButtonContainer.appendChild(button);
    });
    chatBox.appendChild(courseListButtonContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function showAMD() {
    botsfx();
    if (mainmenu.disabled)
      {
        homedisabler();

      }
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText = "ARBSS: Here are the available courses under the AMD department.";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    var courseButtons = [
      {
        text: "BSA - Bachelor of Science in Accountancy",
        //action: showCourse1, 
      },
      { 
        text: "BSLM - Bachelor of Science in Legal Management",
         //action: showCourse2 
      },
      {
        text: "BSBAIM - Bachelor of Science in Business Administration Major in International Management",
        //action: showCourse3,
      },
      {
 
        text: "Return", action: returnSpeCourseButt,
 
        text: "Return", action: returntoCourseLists,
 
      }
    ];

    // Create and append course query buttons
    var courseButtonContainer = document.createElement("div");
    courseButtonContainer.classList.add("button-container", "course-buttons");
    courseButtons.forEach(function (buttonData) {
      var button = document.createElement("button");
      button.style.fontSize = fontSizeDefault + 'px';
      if(buttonData.text==="Return") {
        console.log("Went into equals courses");
        button.textContent = buttonData.text;
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
          buttonData.action();
        });
      } 
      else if(buttonData.text==="BSA - Bachelor of Science in Accountancy") {
        button.textContent = buttonData.text;
        button.setAttribute("id", "button-input");
        button.addEventListener("click", function() {
         sendMessageButton(buttonData.text);
         //buttonData.action();
       });
      }
      else if(buttonData.text==="BSLM - Bachelor of Science in Legal Management") {
        button.textContent = buttonData.text;
        button.setAttribute("id", "button-input");
        button.addEventListener("click", function() {
         sendMessageButton(buttonData.text);
         //buttonData.action();
       });
      }
      else {
        button.textContent = buttonData.text;
        button.setAttribute("id", "button-input");
        button.addEventListener("click", function() {
         sendMessageButton(buttonData.text);
         //buttonData.action();
       });
      }
      courseButtonContainer.appendChild(button);
    });
    chatBox.appendChild(courseButtonContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
    //homedisabler();
  } 

  function showCSIT() {
    botsfx();
    if (mainmenu.disabled)
      {
        homedisabler();

      }
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText = "ARBSS: Here are the available courses under the CSIT department.";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    var courseButtons = [
      {
        text: "BSIT - Bachelor of Science in Information Technology",
        //action: showCourse1, 
      },
      { 
        text: "BSCS - Bachelor of Science in Computer Science",
         //action: showCourse2 
      },
      {
 
        text: "Return", action: returnSpeCourseButt,
 
        text: "Return", action: returntoCourseLists,
 
      }
    ];

    // Create and append course query buttons
    var courseButtonContainer = document.createElement("div");
    courseButtonContainer.classList.add("button-container", "course-buttons");
    courseButtons.forEach(function (buttonData) {
      var button = document.createElement("button");
      button.style.fontSize = fontSizeDefault + 'px';
      if(buttonData.text==="Return") {
        console.log("Went into equals courses");
        button.textContent = buttonData.text;
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
          buttonData.action();
        });
      } 
      else if(buttonData.text==="BSIT - Bachelor of Science in Information Technology") {
        button.textContent = buttonData.text;
        button.setAttribute("id", "button-input");
        button.addEventListener("click", function() {
         sendMessageButton(buttonData.text);
         //buttonData.action();
       });
      } 
      else {
        button.textContent = buttonData.text;
        button.setAttribute("id", "button-input");
        button.addEventListener("click", function() {
         sendMessageButton(buttonData.text);
         buttonData.action();
       });
      }
      courseButtonContainer.appendChild(button);
    });
    chatBox.appendChild(courseButtonContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  } 

  function showDD() {
    botsfx();
    if (mainmenu.disabled)
      {
        homedisabler();

      }
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText = "ARBSS: Here are the available courses under the Dentistry department.";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    var courseButtons = [
      {
        text: "DDM - Doctor of Dental Medicine",
        //action: showCourse1, 
      },
      {
 
        text: "Return", action: returnSpeCourseButt,
 
        text: "Add new course CEU Pwease",
        //action: showCourse1, 
      },
      {
        text: "Return", action: returntoCourseLists,
 
      }
    ];

    // Create and append course query buttons
    var courseButtonContainer = document.createElement("div");
    courseButtonContainer.classList.add("button-container", "course-buttons");
    courseButtons.forEach(function (buttonData) {
      var button = document.createElement("button");
      button.style.fontSize = fontSizeDefault + 'px';
      if(buttonData.text==="Return") {
        console.log("Went into equals courses");
        button.textContent = buttonData.text;
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
          buttonData.action();
        });
      }  
      else {
        button.textContent = buttonData.text;
        button.setAttribute("id", "button-input");
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          buttonData.action(); // Call the button's action function
        });
      }
      courseButtonContainer.appendChild(button);
    });
    chatBox.appendChild(courseButtonContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function showHM() {
    botsfx();
    if (mainmenu.disabled)
      {
        homedisabler();

      }
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText = "ARBSS: Here are the available courses under the HM department.";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    var courseButtons = [
      {
        text: "BSIHM HRCO - Bachelor of Science in International Hospitality Management with Specialization in Hotel, Restaurant and Culinary Operations",
        //action: showCourse1, 
      },
      { 
        text: "BSIHM CIRO - Bachelor of Science in International Hospitality Management with Specialization in Cruise and Integrated Resort Operations",
         //action: showCourse2 
      },
      {
 
        text: "Return", action: returnSpeCourseButt,
 
        text: "Return", action: returntoCourseLists,
 
      }
    ];

    // Create and append course query buttons
    var courseButtonContainer = document.createElement("div");
    courseButtonContainer.classList.add("button-container", "course-buttons");
    courseButtons.forEach(function (buttonData) {
      var button = document.createElement("button");
      button.style.fontSize = fontSizeDefault + 'px';
      if(buttonData.text==="Return") {
        console.log("Went into equals courses");
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
          buttonData.action();
        });
      } 
      else if(buttonData.text==="BSIHM HRCO - Bachelor of Science in International Hospitality Management with Specialization in Hotel, Restaurant and Culinary Operations") {
        button.textContent = buttonData.text;
        button.setAttribute("id", "button-input");
        button.addEventListener("click", function() {
         sendMessageButton(buttonData.text);
         buttonData.action();
       });
      } 
      else {
        button.textContent = buttonData.text;
        button.setAttribute("id", "button-input");
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          // buttonData.action(); // Call the button's action function
        });
      }
      courseButtonContainer.appendChild(button);
    });
    chatBox.appendChild(courseButtonContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  } 

  function showMT() {
    botsfx();
    if (mainmenu.disabled)
      {
        homedisabler();

      }
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText = "ARBSS: Here are the available courses under the MT department.";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    var courseButtons = [
      {
        text: "BSMT - Bachelor of Science in Medical Technology",
        //action: showCourse1, 
      },
      {
 
        text: "Return", action: returnSpeCourseButt,
 
        text: "Return", action: returntoCourseLists,
 
      }
    ];

    // Create and append course query buttons
    var courseButtonContainer = document.createElement("div");
    courseButtonContainer.classList.add("button-container", "course-buttons");
    courseButtons.forEach(function (buttonData) {
      var button = document.createElement("button");
      button.style.fontSize = fontSizeDefault + 'px';
      if(buttonData.text==="Return") {
        console.log("Went into equals courses");
        button.textContent = buttonData.text;
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
          buttonData.action();
        });
      } 
      else {
        button.textContent = buttonData.text;
        button.setAttribute("id", "button-input");
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          // buttonData.action(); // Call the button's action function
        });
      }
      courseButtonContainer.appendChild(button);
    });
    chatBox.appendChild(courseButtonContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function showND() {
    botsfx();
    if (mainmenu.disabled)
      {
        homedisabler();

      }
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText = "ARBSS: Here are the available courses under the ND department.";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    var courseButtons = [
      {
        text: "BSN - Bachelor of Science in Nursing",
        //action: showCourse1, 
      }, 
      {
 
        text: "Return", action: returnSpeCourseButt,
 
        text: "Open New Nursing Course pwease",
        //action: showCourse1, 
      },
      {
        text: "Return", action: returntoCourseLists,
 
      }
    ];

    // Create and append course query buttons
    var courseButtonContainer = document.createElement("div");
    courseButtonContainer.classList.add("button-container", "course-buttons");
    courseButtons.forEach(function (buttonData) {
      var button = document.createElement("button");
      button.style.fontSize = fontSizeDefault + 'px';
      if(buttonData.text==="Return") {
        console.log("Went into equals courses");
        button.textContent = buttonData.text;
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
          buttonData.action();
        });
      } 
      else {
        button.textContent = buttonData.text;
        button.setAttribute("id", "button-input");
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          // buttonData.action(); // Call the button's action function
        });
      }
      courseButtonContainer.appendChild(button);
    });
    chatBox.appendChild(courseButtonContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  } 

  function showPD() {
    botsfx();
    if (mainmenu.disabled)
      {
        homedisabler();

      }
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText = "ARBSS: Here are the available courses under the PD department.";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    var courseButtons = [
      {
        text: "BSP - Bachelor of Science in Pharmacy",
        //action: showCourse1, 
      },
      {
 
        text: "Return", action: returnSpeCourseButt,
 
        text: "BS pa check up si pres",
        //action: showCourse1, 
      }, 
      {
        text: "Return", action: returntoCourseLists,
 
      }
    ];

    // Create and append course query buttons
    var courseButtonContainer = document.createElement("div");
    courseButtonContainer.classList.add("button-container", "course-buttons");
    courseButtons.forEach(function (buttonData) {
      var button = document.createElement("button");
      button.style.fontSize = fontSizeDefault + 'px';
      if(buttonData.text==="Return") {
        console.log("Went into equals courses");
        button.textContent = buttonData.text;
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
          buttonData.action();
        });
      } 
      else {
        button.textContent = buttonData.text;
        button.setAttribute("id", "button-input");
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          // buttonData.action(); // Call the button's action function
        });
      }
      courseButtonContainer.appendChild(button);
    });
    chatBox.appendChild(courseButtonContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  } 

  function showPSD() {
    botsfx();
    if (mainmenu.disabled)
      {
        homedisabler();

      }
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText = "ARBSS: Here are the available courses under the PSD department.";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    var courseButtons = [
      {
        text: "Bachelor of Science in Psychology",
        //action: showCourse1, 
      }, 
      {
 
        text: "Return", action: returnSpeCourseButt,
 
        text: "Return", action: returntoCourseLists,
 
      }
    ];

    // Create and append course query buttons
    var courseButtonContainer = document.createElement("div");
    courseButtonContainer.classList.add("button-container", "course-buttons");
    courseButtons.forEach(function (buttonData) {
      var button = document.createElement("button");
      button.style.fontSize = fontSizeDefault + 'px';
      if(buttonData.text==="Return") {
        console.log("Went into equals courses");
        button.textContent = buttonData.text;
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
          buttonData.action();
        });
      } 
      else {
        button.textContent = buttonData.text;
        button.setAttribute("id", "button-input");
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          // buttonData.action(); // Call the button's action function
        });
      }
      courseButtonContainer.appendChild(button);
    });
    chatBox.appendChild(courseButtonContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  } 

  function showTM() {
    botsfx();
    if (mainmenu.disabled)
      {
        homedisabler();

      }
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText = "ARBSS: Here are the available courses under the TM department.";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    var courseButtons = [
      {
        text: "BSITTM - Bachelor of Science in International Tourism and Travel Management",
        //action: showCourse1, 
      }, 
      {
 
        text: "Return", action: returnSpeCourseButt,
 
        text: "Return", action: returntoCourseLists,
 
      }
    ];

    // Create and append course query buttons
    var courseButtonContainer = document.createElement("div");
    courseButtonContainer.classList.add("button-container", "course-buttons");
    courseButtons.forEach(function (buttonData) {
      var button = document.createElement("button");
      button.style.fontSize = fontSizeDefault + 'px';
      if(buttonData.text==="Return") {
        console.log("Went into equals courses");
        button.textContent = buttonData.text;
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
          buttonData.action();
        });
      } 
      else {
        button.textContent = buttonData.text;
        button.setAttribute("id", "button-input");
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          // buttonData.action(); // Call the button's action function
        });
      }
      courseButtonContainer.appendChild(button);
    });
    chatBox.appendChild(courseButtonContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function showCourse2() {
    botsfx();
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText =
      "ARBSS: Yes, you can change your major under certain conditions. Please contact our academic advising office for more information.";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    removeCourseButtons();
    showCourses();
  }


  function showCourse3() {
    botsfx();
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText =
      "ARBSS: I'm sorry, but you typically can't customize your course schedule entirely based on your preferences. In most educational institutions, the school provides a predetermined schedule for each semester or term";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    removeCourseButtons();
    showCourses();
  }


  function removeCourseButtons() {
    botsfx()
    var courseButtons = document.querySelectorAll(".course-buttons");
    courseButtons.forEach(function (button) {
      button.parentNode.removeChild(button);
    });
  }

  function removeCourseListButtons() {
    botsfx()
    var courseButtons = document.querySelectorAll(".course-buttons");
    courseButtons.forEach(function (button) {
      button.parentNode.removeChild(button);
    });
  }

  function removeSpeCourseButtons() {
    botsfx()
    var courseButtons = document.querySelectorAll(".course-buttons");
    courseButtons.forEach(function (button) {
      button.parentNode.removeChild(button);
    });
  }

  function showAdmissions() {
    botsfx();
    if (mainmenu.disabled)
      {
        homedisabler();

      }
  
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText =
      "ARBSS: For admissions inquiries, please visit our website...";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    //Admission-Options
    var admissionButtons = [
      { text: "Admission Requirements", action: showAdmission1 },
      { text: "How can I apply for admission", action: showAdmission2 },
      { text: "Are there any entrance exams", action: showAdmission3 },
      { text: "When is the admission deadline", action: showAdmission4 },
      { text: "Can I schedule a meeting with an admissions counselor for personalized assistance", action: showAdmission6 },
      { text: "Return", action: ReturnButt }
      // Add here if there's more option(ideas) yes go gyus
    ];

    // Create and append admission-specific buttons
    var admissionButtonContainer = document.createElement("div");
    admissionButtonContainer.classList.add(
      "button-container",
      "admission-buttons"
    );

    admissionButtons.forEach(function (buttonData) {
      var button = document.createElement("button");
      button.style.fontSize = fontSizeDefault + 'px';
      if(buttonData.text==="Return") {
        console.log("Went into return or admissions req");
        button.textContent = buttonData.text;
        button.addEventListener("click", buttonData.action);
      } 
      else {
        button.textContent = buttonData.text;
        //button.setAttribute("id", "button-input");
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          buttonData.action(); // Call the button's action function
        });
      }
    
      admissionButtonContainer.appendChild(button);
    });

    chatBox.appendChild(admissionButtonContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
    removeButtons();
  }


  function removeAdmissionButtons() {
    botsfx()

    var admissionButtons = document.querySelectorAll(".admission-buttons");
    admissionButtons.forEach(function (button) {
      button.parentNode.removeChild(button);
    });
  }


  //Admission-related questions
  function showAdmission1() {
    botsfx();
    removeAdmissionButtons();
    if (mainmenu.disabled)
      {
        homedisabler();

      }
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText = "ARBSS: Here are the options for Admission Types.";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    var courseButtons = [
      {
        text: "Freshman",
        //action: showCourse1, 
      }, 
      {
        text: "Transferee",
        //action: showCourse1, 
      },
      {
 
        text: "Return", action: returnAdmissionsButt,
      }
    ];

    // Create and append course query buttons
    var courseButtonContainer = document.createElement("div");
    courseButtonContainer.classList.add("button-container", "course-buttons");
    courseButtons.forEach(function (buttonData) {
      var button = document.createElement("button");
      button.style.fontSize = fontSizeDefault + 'px';
      if(buttonData.text==="Return") {
        console.log("Went into equals courses");
        button.textContent = buttonData.text;
        button.addEventListener("click", buttonData.action);
      } 
      else {
        button.textContent = buttonData.text;
        button.setAttribute("id", "button-input");
        button.addEventListener("click", function() {
          sendMessageButton("Showing the " + buttonData.text + " Requirements");
          //buttonData.action();
          // Send the button text as a user message}
        });
      }
      courseButtonContainer.appendChild(button);
    })
  
    // // Append buttons to container
    // buttons.forEach(function (button) {
    //   var buttonElement = document.createElement("button");
    //   buttonElement.style.fontSize = fontSizeDefault + 'px';
      
    //   buttonElement.innerHTML = "<img src='" + button.pic + "' style='width:30px; height:30px; margin-right:2px;'> " + button.text ;
    //   // buttonElement.innerHTML = "<img src='scholar1.png' alt='Course Image' style='width:20px; height:20px; margin-right:5px;'>";
    //   // buttonElement.innerHTML = "<img src='pic' style='width:20px; height:20px; margin-right:5px;'>";
  
    //   if(button.text==="Return") {
    //     console.log("Went into courses/admissions/location");
    //     buttonElement.addEventListener("click", function() {
    //       sendMessageButton(button.text); // Send the button text as a user message
    //       button.action(); // Call the button's action function
    //     });
    //   } else {
    //     // buttonElement.textContent = button.text;
    //     homedisabler();
    //     buttonElement.setAttribute("id", "button-input");
    //     buttonElement.addEventListener("click", function() {
    //       sendMessageButton(button.text); // Send the button text as a user message
 
    //       // buttonData.action(); // Call the button's action function
    //     });
    //   }
    //   courseButtonContainer.appendChild(button);
    // });
    chatBox.appendChild(courseButtonContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function returnAdmissionsButt() {
    botsfx();
    //var chatBox = document.getElementById("chat-box");
    // var botMessage = document.createElement("div");
    // botMessage.classList.add("bot-message");
    // botMessage.innerText =
    //   "ARBSS: We offer a diverse range of courses across different disciplines. You can explore our course catalog on the website or connect with our academic advisors for personalized guidance based on your interests.";
    // chatBox.appendChild(botMessage);
    removeAdmissionTypeButtons();
    showAdmissions();
  }

  function removeAdmissionTypeButtons() {
    botsfx();

    var admissionButtons = document.querySelectorAll(".course-buttons");
    admissionButtons.forEach(function (button) {
      button.parentNode.removeChild(button);
    });
  }


  //Admission-related questions
  // function showAdmission1() {
  //   botsfx();
  //   homedisabler();
  //   var chatBox = document.getElementById("chat-box");
  //   var botMessage = document.createElement("div");
  //   botMessage.classList.add("bot-message");
  //   botMessage.innerText =
  //     "ARBSS: The required documents for admission may vary by program. You can find a comprehensive list on our official website under the admissions section. The submission process details, including online portals or physical submission locations, will also be provided there. For further assistance, you can contact our admissions office at 259 Sen. Gil Puyat Avenue, Makati City, 1203, or reach them at (02) 8889-8169, (02) 8889-7493, or (02) 8843-0300. You can also email ceumakatiadmission@ceu.edu.ph.";
  //   chatBox.appendChild(botMessage);
  //   chatBox.scrollTop = chatBox.scrollHeight;
  //   removeAdmissionButtons();
  //   showAdmissions();
  // }


  function showAdmission2() {
    botsfx()
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText =
      "ARBSS: You can easily apply online through our official website. If you need guidance, our admissions team is available to assist you throughout the application process.";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    removeAdmissionButtons();
    showAdmissions();
  }


  function showAdmission3() {
    botsfx()
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText =
      "ARBSS: Yes, Centro Escolar University Makati conducts entrance exams for admission. You can find details about the exam schedule, format, and preparation tips on our admissions page. If you have specific questions, feel free to reach out to our admissions office for assistance.";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    removeAdmissionButtons();
    showAdmissions();
  }


  function showAdmission4() {
    botsfx()
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText =
      "ARBSS: Admission deadlines can vary by program and semester. To ensure you have the most accurate information, please visit our official website or contact our admissions office directly. They will provide you with details about application deadlines for the upcoming semester.";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    removeAdmissionButtons();
    showAdmissions();
  }


  function showAdmission5() {
    botsfx()
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText =
      "ARBSS: Transfer student requirements can differ from regular admissions. Please visit our official website or reach out to our admissions office for specific information on the admission requirements for transfer students. They can guide you on the necessary documents and steps to facilitate a smooth transfer process. You can contact them at 259 Sen. Gil Puyat Avenue, Makati City, 1203, or by phone at (02) 8889-8169, (02) 8889-7493, or (02) 8843-0300, or via email at ceumakatiadmission@ceu.edu.ph.";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    removeAdmissionButtons();
    showAdmissions();
  }


  function showAdmission6() {
    botsfx()
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText =
      "ARBSS: Absolutely! To schedule a meeting with an admissions counselor for personalized assistance, please contact our admissions office directly. They will be happy to guide you through the process, address any concerns, and provide tailored support to ensure a successful admission experience. Reach them at 259 Sen. Gil Puyat Avenue, Makati City, 1203, or by phone at (02) 8889-8169, (02) 8889-7493, or (02) 8843-0300. You can also email ceumakatiadmission@ceu.edu.ph.";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    removeAdmissionButtons();
    showAdmissions();
  }

  // function removeScheduleButtons() {
  //   botsfx()
  //   var scheduleButtons = document.querySelectorAll(".schedule-buttons");
  //   scheduleButtons.forEach(function (button) {
  //     button.parentNode.removeChild(button);
  //   });
  // }


  function showSchedules() {
    botsfx(); 
    console.log("went to sched");
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText =
      "ARBSS: Here are the schedules for the upcoming semester...";
    chatBox.appendChild("Show " + botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    removeButtons();
  }


  function showEvents() {
    botsfx()
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText =
      "ARBSS: Check out our upcoming events on our website...";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    removeButtons();
    test();
  }


  function showFacultyAMD() {
    botsfx();
    if (mainmenu.disabled)
      {
        homedisabler();

      }
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText = "ARBSS: Choose from the following options: ";
    chatBox.appendChild(botMessage);
    // chatBox.scrollTop = chatBox.scrollHeight;
    var facultyAMDButtons = [
      {
        text: "Permanent AMD Faculty Members",
        //action: showCourse1, 
      },
      { 
        text: "Fixed Term AMD Faculty Members",
         //action: showCourse2 
      },
      {
        text: "Lecturer AMD Faculty Members",
        //action: showCourse3,
      },
      {
 
        text: "Return", action: returnFacultyButt,
 
        text: "Return", action: returnToMainFaculty,
 
      }
    ];

    // Create and append course query buttons
    var facultyAMDButtonContainer = document.createElement("div");
    facultyAMDButtonContainer.classList.add("button-container", "course-buttons");
    facultyAMDButtons.forEach(function (buttonData) {
      var button = document.createElement("button");
      button.style.fontSize = fontSizeDefault + 'px';
      if(buttonData.text==="Return") {
        console.log("Went into equals courses");
        button.textContent = buttonData.text;
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          buttonData.action(); // Call the button's action function
        });
      } 
      else {
        button.textContent = buttonData.text;
        button.setAttribute("id", "button-input");
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          // buttonData.action(); // Call the button's action function
        });
      }
      facultyAMDButtonContainer.appendChild(button);
    });
    chatBox.appendChild(facultyAMDButtonContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function showFacultyCSIT() {
    botsfx();
    if (mainmenu.disabled)
      {
        homedisabler();

      }
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div"); 
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText = "ARBSS: Choose from the following options: ";
    chatBox.appendChild(botMessage);
    // chatBox.scrollTop = chatBox.scrollHeight;
    var facultyCSITButtons = [
      {
        text: "Permanent CSIT Faculties",
        //action: showCourse1, 
      },
      { 
        text: "Fixed Term CSIT Faculties",
         //action: showCourse2 
      },
      {
        text: "Lecturer CSIT Faculties",
        //action: showCourse3,
      },
      {
 
        text: "Return", action: returnFacultyButt,
 
        text: "Return", action: returnToMainFaculty,
 
      }
    ];

    // Create and append course query buttons
    var facultyCSITButtonContainer = document.createElement("div");
    facultyCSITButtonContainer.classList.add("button-container", "course-buttons");
    facultyCSITButtons.forEach(function (buttonData) {
      var button = document.createElement("button");
      button.style.fontSize = fontSizeDefault + 'px';
      if(buttonData.text==="Return") {
        console.log("Went into equals courses");
        button.textContent = buttonData.text;
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          buttonData.action(); // Call the button's action function
        });
      } 
      else {
        button.textContent = buttonData.text;
        button.setAttribute("id", "button-input");
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          // buttonData.action(); // Call the button's action function
        });
      }
      facultyCSITButtonContainer.appendChild(button);
    });
    chatBox.appendChild(facultyCSITButtonContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function showFacultyDentistry() {
    botsfx();
    if (mainmenu.disabled)
      {
        homedisabler();

      }
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText = "ARBSS: Choose from the following options: ";
    chatBox.appendChild(botMessage);
    // chatBox.scrollTop = chatBox.scrollHeight;
    var facultyDentButtons = [
      {
        text: "Permanent Dentistry Faculty Members",
        //action: showCourse1, 
      },
      { 
        text: "Fixed Term Dentistry Faculty Members",
         //action: showCourse2 
      },
      {
        text: "Lecturer Dentistry Faculty Members",
        //action: showCourse3,
      },
      {
 
        text: "Return", action: returnFacultyButt,
 
        text: "Return", action: returnToMainFaculty,
 
      }
    ];

    // Create and append course query buttons
    var facultyDentButtonContainer = document.createElement("div");
    facultyDentButtonContainer.classList.add("button-container", "course-buttons");
    facultyDentButtons.forEach(function (buttonData) {
      var button = document.createElement("button");
      button.style.fontSize = fontSizeDefault + 'px';
      if(buttonData.text==="Return") {
        console.log("Went into equals courses");
        button.textContent = buttonData.text;
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          buttonData.action(); // Call the button's action function
        });
      } 
      else {
        button.textContent = buttonData.text;
        button.setAttribute("id", "button-input");
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          // buttonData.action(); // Call the button's action function
        });
      }
      facultyDentButtonContainer.appendChild(button);
    });
    chatBox.appendChild(facultyDentButtonContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function showFacultyHM() {
    botsfx();
    if (mainmenu.disabled)
      {
        homedisabler();

      }
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText = "ARBSS: Choose from the following options: ";
    chatBox.appendChild(botMessage);
    // chatBox.scrollTop = chatBox.scrollHeight;
    var facultyHMButtons = [
      {
        text: "Permanent HM Faculty Members ",
        //action: showCourse1, 
      },
      { 
        text: "Fixed Term HM Faculty Members",
         //action: showCourse2 
      },
      {
        text: "Lecturer HM Faculty Members",
        //action: showCourse3,
      },
      {
 
        text: "Return", action: returnFacultyButt,
 
        text: "Return", action: returnToMainFaculty,
 
      }
    ];

    // Create and append course query buttons
    var facultyHMButtonContainer = document.createElement("div");
    facultyHMButtonContainer.classList.add("button-container", "course-buttons");
    facultyHMButtons.forEach(function (buttonData) {
      var button = document.createElement("button");
      button.style.fontSize = fontSizeDefault + 'px';
      if(buttonData.text==="Return") {
        console.log("Went into equals courses");
        button.textContent = buttonData.text;
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          buttonData.action(); // Call the button's action function
        });
      } 
      else {
        button.textContent = buttonData.text;
        button.setAttribute("id", "button-input");
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          // buttonData.action(); // Call the button's action function
        });
      }
      facultyHMButtonContainer.appendChild(button);
    });
    chatBox.appendChild(facultyHMButtonContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function showFacultyMedtech() {
    botsfx();
    if (mainmenu.disabled)
      {
        homedisabler();

      }
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText = "ARBSS: Choose from the following options: ";
    chatBox.appendChild(botMessage);
    // chatBox.scrollTop = chatBox.scrollHeight;
    var facultyMTButtons = [
      {
        text: "Permanent MedTech Faculty Members",
        //action: showCourse1, 
      },
      { 
        text: "Fixed Term MedTech Faculty Members",
         //action: showCourse2 
      },
      {
        text: "Lecturer MedTech Faculty Members",
        //action: showCourse3,
      },
      {
 
        text: "Return", action: returnFacultyButt,
 
        text: "Return", action: returnToMainFaculty,
 
      }
    ];

    // Create and append course query buttons
    var facultyMTButtonContainer = document.createElement("div");
    facultyMTButtonContainer.classList.add("button-container", "course-buttons");
    facultyMTButtons.forEach(function (buttonData) {
      var button = document.createElement("button");
      button.style.fontSize = fontSizeDefault + 'px';
      if(buttonData.text==="Return") {
        console.log("Went into equals courses");
        button.textContent = buttonData.text;
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          buttonData.action(); // Call the button's action function
        });
      } 
      else {
        button.textContent = buttonData.text;
        button.setAttribute("id", "button-input");
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          // buttonData.action(); // Call the button's action function
        });
      }
      facultyMTButtonContainer.appendChild(button);
    });
    chatBox.appendChild(facultyMTButtonContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function showFacultyNursing() {
    botsfx();
    if (mainmenu.disabled)
      {
        homedisabler();

      }
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText = "ARBSS: Choose from the following options: ";
    chatBox.appendChild(botMessage);
    // chatBox.scrollTop = chatBox.scrollHeight;
    var facultyNursingButtons = [
      {
        text: "Permanent Nursing Faculty Members",
        //action: showCourse1, 
      },
      { 
        text: "Fixed Term Nursing Faculty Members",
         //action: showCourse2 
      },
      {
        text: "Lecturer Nursing Faculty Members",
        //action: showCourse3,
      },
      {
 
        text: "Return", action: returnFacultyButt,
 
        text: "Return", action: returnToMainFaculty,
 
      }
    ];

    // Create and append course query buttons
    var facultyNursingButtonContainer = document.createElement("div");
    facultyNursingButtonContainer.classList.add("button-container", "course-buttons");
    facultyNursingButtons.forEach(function (buttonData) {
      var button = document.createElement("button");
      button.style.fontSize = fontSizeDefault + 'px';
      if(buttonData.text==="Return") {
        console.log("Went into equals courses");
        button.textContent = buttonData.text;
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          buttonData.action(); // Call the button's action function
        });
      } 
      else {
        button.textContent = buttonData.text;
        button.setAttribute("id", "button-input");
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          // buttonData.action(); // Call the button's action function
        });
      }
      facultyNursingButtonContainer.appendChild(button);
    });
    chatBox.appendChild(facultyNursingButtonContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function showFacultyPharma() {
    botsfx();
    if (mainmenu.disabled)
      {
        homedisabler();

      }
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText = "ARBSS: Choose from the following options: ";
    chatBox.appendChild(botMessage);
    // chatBox.scrollTop = chatBox.scrollHeight;
    var facultyPharmaButtons = [
      {
        text: "Permanent Pharmacy Faculty Members",
        //action: showCourse1, 
      },
      { 
        text: "Fixed Term Pharmacy Faculty Members",
         //action: showCourse2 
      },
      {
        text: "Lecturer Pharmacy Faculty Members",
        //action: showCourse3,
      },
      {
 
        text: "Return", action: returnFacultyButt,
 
        text: "Return", action: returnToMainFaculty,
 
      }
    ];

    // Create and append course query buttons
    var facultyPharmaButtonContainer = document.createElement("div");
    facultyPharmaButtonContainer.classList.add("button-container", "course-buttons");
    facultyPharmaButtons.forEach(function (buttonData) {
      var button = document.createElement("button");
      button.style.fontSize = fontSizeDefault + 'px';
      if(buttonData.text==="Return") {
        console.log("Went into equals courses");
        button.textContent = buttonData.text;
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          buttonData.action(); // Call the button's action function
        });
      } 
      else {
        button.textContent = buttonData.text;
        button.setAttribute("id", "button-input");
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          // buttonData.action(); // Call the button's action function
        });
      }
      facultyPharmaButtonContainer.appendChild(button);
    });
    chatBox.appendChild(facultyPharmaButtonContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function showFacultyPsych() {
    botsfx();
    if (mainmenu.disabled)
      {
        homedisabler();

      }
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText = "ARBSS: Choose from the following options: ";
    chatBox.appendChild(botMessage);
    // chatBox.scrollTop = chatBox.scrollHeight;
    var facultyPsychButtons = [
      {
        text: "Permanent Psychology Faculty Members",
        //action: showCourse1, 
      },
      { 
        text: "Fixed Term Psychology Faculty Members",
         //action: showCourse2 
      },
      {
        text: "Lecturer Psychology Faculty Members",
        //action: showCourse3,
      },
      {
 
        text: "Return", action: returnFacultyButt,
 
        text: "Return", action: returnToMainFaculty,
 
      }
    ];

    // Create and append course query buttons
    var facultyPsychButtonContainer = document.createElement("div");
    facultyPsychButtonContainer.classList.add("button-container", "course-buttons");
    facultyPsychButtons.forEach(function (buttonData) {
      var button = document.createElement("button");
      button.style.fontSize = fontSizeDefault + 'px';
      if(buttonData.text==="Return") {
        console.log("Went into equals courses");
        button.textContent = buttonData.text;
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          buttonData.action(); // Call the button's action function
        });
      } 
      else {
        button.textContent = buttonData.text;
        button.setAttribute("id", "button-input");
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          // buttonData.action(); // Call the button's action function
        });
      }
      facultyPsychButtonContainer.appendChild(button);
    });
    chatBox.appendChild(facultyPsychButtonContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function showFacultyTourism() {
    botsfx();
    if (mainmenu.disabled)
      {
        homedisabler();

      }
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText = "ARBSS: Choose from the following options: ";
    chatBox.appendChild(botMessage);
    // chatBox.scrollTop = chatBox.scrollHeight;
    var facultyTourismButtons = [
      {
        text: "Permanent Tourism Faculty Members",
        //action: showCourse1, 
      },
      { 
        text: "Fixed Term Tourism Faculty Members",
         //action: showCourse2 
      },
      {
        text: "Lecturer Tourism Faculty Members",
        //action: showCourse3,
      },
      {
 
        text: "Return", action: returnFacultyButt,
 
        text: "Return", action: returnToMainFaculty,
 
      }
    ];

    // Create and append course query buttons
    var facultyTourismButtonContainer = document.createElement("div");
    facultyTourismButtonContainer.classList.add("button-container", "course-buttons");
    facultyTourismButtons.forEach(function (buttonData) {
      var button = document.createElement("button");
      button.style.fontSize = fontSizeDefault + 'px';
      if(buttonData.text==="Return") {
        console.log("Went into equals courses");
        button.textContent = buttonData.text;
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          buttonData.action(); // Call the button's action function
        });
      } 
      else {
        button.textContent = buttonData.text;
        button.setAttribute("id", "button-input");
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          //buttonData.action(); // Call the 's action function
        });
      }
      facultyTourismButtonContainer.appendChild(button);
    });
    chatBox.appendChild(facultyTourismButtonContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function showFaculty() {
    removeButtons();
    botsfx();
    if (mainmenu.disabled)
      {
        homedisabler();

      }
    var chatBox = document.getElementById("chat-box"); 
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText =
      "ARBSS: Choose which department faculty to look at: ";
    chatBox.appendChild(botMessage);
    
    var facultyDeptList = [
      {
        text: "Accountancy and Management Department (AMD)", action: showFacultyAMD, 
      },
      { 
        text: "Computer Science and Information Technology Department (CSIT)",  action: showFacultyCSIT,
      },
      {
        text: "Dentistry Department (DD)", action: showFacultyDentistry,
      },
      {
        text: "Hospitality Management Department (HM)", action: showFacultyHM,
      },
      {
        text: "Medical Technology Department (MT)", action: showFacultyMedtech,
      },
      {
        text: "Nursing Department (ND)", action: showFacultyNursing,
      },
      {
        text: "Pharmacy Department (PD)", action: showFacultyPharma,
      },
      {
        text: "Psychology Department (PSD)", action: showFacultyPsych,
      }, 
      {
        text: "Tourism Management Department (TM)", action: showFacultyTourism,
      }, 
      {
        text: "Return", action: ReturnButt,
      }
    ];

    // Create and append course query buttons
    var facultyDeptListButtonContainer = document.createElement("div");
    facultyDeptListButtonContainer.classList.add("button-container", "course-buttons");
    facultyDeptList.forEach(function (buttonData) {
      var button = document.createElement("button");
      button.style.fontSize = fontSizeDefault + 'px';
      if(buttonData.text==="Return") {
        console.log("Went into course list");
        button.textContent = buttonData.text;
        button.addEventListener("click", buttonData.action);
      }
      else {
        button.textContent = buttonData.text;
        button.addEventListener("click", function() {
         sendMessageButton("Show me the " + buttonData.text);
         buttonData.action();
       });
      }
      facultyDeptListButtonContainer.appendChild(button);
    });
    chatBox.appendChild(facultyDeptListButtonContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function returnFacultyButt() {
    botsfx();
    //var chatBox = document.getElementById("chat-box");
    // var botMessage = document.createElement("div");
    // botMessage.classList.add("bot-message");
    // botMessage.innerText =
    //   "ARBSS: We offer a diverse range of courses across different disciplines. You can explore our course catalog on the website or connect with our academic advisors for personalized guidance based on your interests.";
    // chatBox.appendChild(botMessage);
    removeTypeFactButtons();
    showFaculty();
  }

  function removeTypeFactButtons() {
    botsfx()
    var courseButtons = document.querySelectorAll(".course-buttons");
    courseButtons.forEach(function (button) {
      button.parentNode.removeChild(button);
    });
  }

  function showLocation() {
    botsfx();
    if (mainmenu.disabled)
      {
        homedisabler();

      }
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText = "ARBSS: Here are the available campuses in CEU Makati";
    chatBox.appendChild(botMessage);
    var courseButtons = [
      {
        text: "CEU - Gil Puyat Campus", action: showGP, 
      },
      { 
        text: "CEU - Legazpi Village Campus", action: showLV, 
      },
      {
        text: "Return", action: ReturnButt,
      }
    ];

    // Create and append course query buttons
    var courseButtonContainer = document.createElement("div");
    courseButtonContainer.classList.add("button-container", "course-buttons");
    courseButtons.forEach(function (buttonData) {
      var button = document.createElement("button");
      button.style.fontSize = fontSizeDefault + 'px';
      button.textContent = buttonData.text;
        button.addEventListener("click", function() {
          // Send the button text as a user message
         sendMessageButton(buttonData.text);
         buttonData.action(); // Call the button's action function
        });
      courseButtonContainer.appendChild(button);
    });
    chatBox.appendChild(courseButtonContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
    removeButtons();
  } 

  function returnLocButt() {
    botsfx();
    //var chatBox = document.getElementById("chat-box");
    // var botMessage = document.createElement("div");
    // botMessage.classList.add("bot-message");
    // botMessage.innerText =
    //   "ARBSS: We offer a diverse range of courses across different disciplines. You can explore our course catalog on the website or connect with our academic advisors for personalized guidance based on your interests.";
    // chatBox.appendChild(botMessage);
    removeFloorButtons();
    showLocation();
  }

  function removeFloorButtons() {
    botsfx()
    var courseButtons = document.querySelectorAll(".course-buttons");
    courseButtons.forEach(function (button) {
      button.parentNode.removeChild(button);
    });
  }

  function showGP() {
    removeCourseButtons();
    botsfx();
    if (mainmenu.disabled)
      {
        homedisabler();

      }
    var chatBox = document.getElementById("chat-box"); 
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText = "ARBSS: List of floor levels in CEU GP";
    chatBox.appendChild(botMessage);
    
    var coursesList = [
      {
        text: "GP Ground Floor", //action: showAMD, 
      },
      { 
        text: "GP Second Floor", //action: showCSIT,
      },
      {
        text: "GP Third Floor", //action: showDD,
      },
      {
        text: "GP Fourth Floor", //action: showHM,
      },
      {
        text: "GP Fifth Floor", //action: showMT,
      },
      {
        text: "GP Sixth Floor", //action: showND,
      },
      {
        text: "GP Seventh Floor", //action: showPD,
      },
      {
        text: "GP Eighth Floor", //action: showPSD,
      }, 
      {
        text: "GP Ninth Floor", //action: showPSD,
      },
      {
 
        text: "Return", action: returnLocButt,
 
        text: "Return", action: returnToMainLocations,
 
      }
    ];

    // Create and append course query buttons
    var courseListButtonContainer = document.createElement("div");
    courseListButtonContainer.classList.add("button-container", "course-buttons");
    coursesList.forEach(function (buttonData) {
      var button = document.createElement("button");
      button.style.fontSize = fontSizeDefault + 'px';
      if(buttonData.text==="Return") {
        button.textContent = buttonData.text;
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          buttonData.action(); // Call the button's action function
        });
      }
      else {
        button.textContent = buttonData.text;
        button.setAttribute("id", "button-input");
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          // buttonData.action(); // Call the button's action function
        });
      } 
      courseListButtonContainer.appendChild(button);
    });
    chatBox.appendChild(courseListButtonContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function showLV() {
    removeCourseButtons();
    botsfx();
    if (mainmenu.disabled)
      {
        homedisabler();

      }
    var chatBox = document.getElementById("chat-box"); 
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText = "ARBSS: List of floor levels in CEU LV";
    chatBox.appendChild(botMessage);
    
    var coursesList = [
      {
        text: "LV Ground Floor", //action: showAMD, 
      },
      { 
        text: "LV Second Floor", //action: showCSIT,
      },
      {
        text: "LV Third Floor", //action: showDD,
      },
      {
        text: "LV Fourth Floor", //action: showHM,
      },
      {
        text: "LV Fifth Floor", //action: showMT,
      },
      {
        text: "LV Sixth Floor", //action: showND,
      },
      {
        text: "LV Seventh Floor", //action: showPD,
      },
      {
        text: "LV Eighth Floor", //action: showPSD,
      }, 
      {
        text: "LV Ninth Floor", //action: showPSD,
      },
      {
        text: "LV Tenth Floor", //action: showPSD,
      },
      {
        text: "LV Eleventh Floor", //action: showPSD,
      },
      {
        text: "LV Twelfth Floor", //action: showPSD,
      },
      {
        text: "LV Fourteenth Floor", //action: showPSD,
      },
      {
        text: "LV Fifteenth Floor", //action: showPSD,
      },
      {
 
        text: "Return", action: returnLocButt,
 
        text: "Return", action: returnToMainLocations,
 
      }
    ];

    // Create and append course query buttons
    var courseListButtonContainer = document.createElement("div");
    courseListButtonContainer.classList.add("button-container", "course-buttons");
    coursesList.forEach(function (buttonData) {
      var button = document.createElement("button");
      button.style.fontSize = fontSizeDefault + 'px';
      if(buttonData.text==="Return") {
        button.textContent = buttonData.text;
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          buttonData.action(); // Call the button's action function
        });
      }
      else {
        button.textContent = buttonData.text;
        button.setAttribute("id", "button-input");
        button.addEventListener("click", function() {
          sendMessageButton(buttonData.text);
           // Send the button text as a user message
          // buttonData.action(); // Call the button's action function
        });
      } 
      courseListButtonContainer.appendChild(button);
    });
    chatBox.appendChild(courseListButtonContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function showAboutUs() {
    botsfx();
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText = "ARBSS: Meet our esteemed faculty members...";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    homedisabler();
    test();
  }


  function showFAQ() {
    botsfx()
    var chatBox = document.getElementById("chat-box");
    var botMessage = document.createElement("div");
    botMessage.style.fontSize = fontSizeDefault + 'px';
    botMessage.classList.add("bot-message");
    botMessage.innerText = "ARBSS: Test!";
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    removeButtons();
    test();
  }

  //chatbot animations
  var arbstalking = false;
  var counttimer = 5000;
  const myTimeout = window.setTimeout(arbssidle, counttimer);

  //arbss talking
  function arbsstalk() {
    document.getElementById("arbsschatbotpic").src = "arbsstalkinggif.gif";
    arbstalking = true;
    window.setTimeout(arbssidle, counttimer);
  }

  //arbss idle
  function arbssidle() {
    document.getElementById("arbsschatbotpic").src = "arbssidle.gif";
    arbstalking = false;
  }

  if (arbstalking == false) {
    window.clearTimeout(myTimeout);
  }

  var userInput = document.getElementById("user-input");
  userInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter" ) {
      sendMessage();

    }
  });

  var t = document.getElementById("user-input");
  
  //anti-spamming home button
  function disabler() {
    if (!t.disabled) {
      t.disabled = true
      userinputchatbox.placeholder = "Arbssy is thinking...";
    } else {
      t.disabled = false
      userinputchatbox.placeholder = "Message Arbssy here...";
    }
  }
  // send message

  function sendMessageButton(buttonText) {
    // arbsstalk();

    if (mainmenu.disabled)
      {
        homedisabler();

      }
    var chatBox = document.getElementById("chat-box");
    var userMessage = document.createElement("div");
    userMessage.style.fontSize = fontSizeDefault + 'px';
    userMessage.classList.add("user-message");
    userMessage.innerText = buttonText;
    console.log(userMessage.innerText);
    // userMessage.setAttribute("id", "button-input");
    console.log(userMessage.nodeName);
    console.log("button pressed");
    chatBox.appendChild(userMessage);

    removeCourseButtons();
    removeAdmissionButtons();
    removeButtons();
    chatBox.scrollTop = chatBox.scrollHeight;
}
  function sendMessage() {

    // const soundEffect = document.getElementById("user-sound-effect");
    // soundEffect.play();
    // arbsstalk();
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim()!== "") {
      var chatBox = document.getElementById("chat-box");
      var userMessage = document.createElement("div");
      userMessage.style.fontSize = fontSizeDefault + 'px';
      userMessage.classList.add("user-message");
      userMessage.innerText = "" + userInput;
      chatBox.appendChild(userMessage);
      usersfx()
      if (mainmenu.disabled)
      {
        homedisabler();

      }
      removeButtons();
      // ARBSS reply
      var botReply = generateBotReply(userInput);
      var botMessage = document.createElement("div");
      botMessage.style.fontSize = fontSizeDefault + 'px';
      botMessage.classList.add("bot-message");
      
      disabler();
    //   if (!t.disabled) { t.disabled = true }
    // if (t.disabled) { t.disabled = false }
    }
  }


  function generateBotReply(userInput) {
    botsfx();
    disabler();
    
    if (
      userInput.toLowerCase().includes("hello") ||
      userInput.toLowerCase().includes("hi")
    ) {
      return "Hi!";
    } else if (userInput.toLowerCase().includes("how are you") ) {
      return "I'm honored that you ask for my wellbeing, but I'm just a chatbot.";
    } else {
      return "Sorry, it seems like I don't understand what you're saying.";
    };
    
  }

  //remove all buttons that doesnt applied in the category yes guys go go
  function removeButtons() {
    var buttons = document.querySelectorAll(".button-container");
    buttons.forEach(function (button) {
      // Add here for the other buttons to be removed when they clicked the specific types of questions
      if (
        !button.classList.contains("course-buttons") &&
        !button.classList.contains("admission-buttons")
      ) {
        button.parentNode.removeChild(button);
      }
    });
  }
});

// Get the current date
const date = new Date();

// Format the date as a string
const formattedDate = date.toLocaleDateString();

// Insert the date into the paragraph
document.getElementById("datebeta").innerHTML = '(Beta Version) ' + formattedDate;


function usersfx() {
  const soundEffect = document.getElementById("user-sound-effect");
    soundEffect.play();
}


function botsfx() {
  const soundEffect = document.getElementById("bot-sound-effect");
  soundEffect.play(); 
}

const checkbox = document.getElementById("checkbox")
const textcheckbox = document.getElementById("darkmodetext")

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
  usersfx()
  // textcheckbox.innerHTML = checkbox.checked ? "Dark Mode on" : "Dark Mode off"
  // textcheckbox.style.textAlign = "justify";
})


function checkLength(input) {
  // Remove spaces from the input value
  let sanitizedValue = input.value

  // Calculate the character count
  let characterCount = sanitizedValue.length;

  // Update the displayed count
  document.getElementById("word-count").innerHTML = "Character Count: " + characterCount + '/' + input.maxLength;

  // Truncate the input value if it exceeds the maxlength
  if (characterCount >= input.maxLength) {
    input.value = sanitizedValue.slice(0, input.maxLength);
  }
}

