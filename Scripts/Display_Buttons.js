function listingLink(num,clr,book){
    return `<a href="Book_Studies/${book}/Listing ${num}/index.html">
				<button style="--clr:${clr}"><span>Listing ${num}</span><i></i></button></a>`;
}

function displayButtons(num) {
    let buttons = [
      {
        num: 1,
        link: "FreeCodeCamp/Responsive_Web_Design/Learn_the_CSS_Box_Model_by_Building_a_Rothko_Painting/index.html",
        style: "--clr:#ffff",
        text: "Learn the CSS Box Model by Building a Rothko Painting"
      },
      {
        num: 2,
        link: "FreeCodeCamp/Responsive_Web_Design/Learn_CSS_Flexbox_by_Building_a_Photo_Gallery/index.html",
        style: "--clr:#CCFF00",
        text: "Learn CSS Flexbox by Building a Photo Gallery"
      },
      {
        num: 3,
        link: "FreeCodeCamp/Responsive_Web_Design/Learn_Typography_by_Building_a_Nutrition_Label/index.html",
        style: "--clr:#ed438a",
        text: "Learn Typography by Building a Nutrition Label"
      },
      {
        num: 4,
        link: "FreeCodeCamp/Responsive_Web_Design/Learn_Accessibility_by_Building_a_Quiz/index.html",
        style: "--clr:#BC13FE",
        text: "Learn Accessibility by Building a Quiz"
      }, 
      {
        num: 5,
        link: "FreeCodeCamp/Responsive_Web_Design/Learn_HTML_by_Building_a_Cat_Photo_App/index.html",
        style: "--clr:#39FF14",
        text: "Learn HTML by Building a Cat Photo App"
      },
      {
        num: 6,
        link: "FreeCodeCamp/Responsive_Web_Design/Learn_Basic_CSS_by_Building_a_Cafe_Menu/index.html",
        style: "--clr:#FF44CC",
        text: "Learn Basic CSS by Building a Cafe Menu"
      },
      {
        num: 7,
        link: "FreeCodeCamp/Responsive_Web_Design/Learn_CSS_Colors_by_Building_a_Set_of_Colored_Markers/index.html",
        style: "--clr:#7FFF00",
        text: "Learn CSS Colors by Building a Set of Colored Markers"
      },
      {
        num: 8,
        link: "FreeCodeCamp/Responsive_Web_Design/Learn_HTML_Forms_by_Building_a_Registration_Form/index.html",
        style: "--clr:#263773",
        text: "Learn HTML Forms by Building a Registration Form"
      }, 
      {
      num: 9,
      link: "FreeCodeCamp/Responsive_Web_Design/Learn_More_About_CSS_Pseudo_Selectors_By_Building_A_Balance_Sheet/index.html",
      style: "--clr:#1F51FF",
      text: "Learn More About CSS Pseudo Selectors By Building A Balance Sheet"
    },
    {
      num: 10,
      link: "FreeCodeCamp/Responsive_Web_Design/Learn_Intermediate_CSS_by_Building_a_Picasso_Painting/index.html",
      style: "--clr:#ed438a",
      text: "Learn Intermediate CSS by Building a Picasso Painting"
    },
    {
      num: 11,
      link: "FreeCodeCamp/Responsive_Web_Design/Learn_Responsive_Web_Design_by_Building_a_Piano/index.html",
      style: "--clr:#8A2BE2",
      text: "Learn Responsive Web Design by Building a Piano"
    },  
    {
        num: 12,
        link: "FreeCodeCamp/Responsive_Web_Design/Learn_CSS_Variables_by_Building_a_City_Skyline/Index.html",
        style: "--clr:#43b86e",
        text: "Learn CSS Variables by Building a City Skyline"
      },
      {
        num: 13,
        link: "FreeCodeCamp/Responsive_Web_Design/Learn_CSS_Grid_by_Building_a_Magazine/Index.html",
        style: "--clr:#7d58a0",
        text: "Learn CSS Grid by Building a Magazine"
      },  
      {
        num: 14,
        link: "FreeCodeCamp/Responsive_Web_Design/Learn_CSS_Animation_by_Building_a_Ferris_Wheel/index.html",
        style: "--clr:#1F51FF",
        text: "Learn CSS Animation by Building a Ferris Wheel"
      },
      {
        num: 15,
        link: "FreeCodeCamp/Responsive_Web_Design/Learn_CSS_Transforms_by_Building_a_Penguin/index.html",
        style: "--clr:#a46554",
        text: "Learn CSS Transforms by Building a Penguin"
      }, 
      {
        num: 16,
        link: "FreeCodeCamp/Responsive_Web_Design/Survey_Form/index.html",
        style: "--clr:#0dff9f",
        text: "Survey Form"
      },
      {
        num: 17,
        link: "FreeCodeCamp/Responsive_Web_Design/Tribute_Page/index.html",
        style: "--clr:#ed438a",
        text: "Tribute Page"
      },
      {
        num: 18,
        link: "FreeCodeCamp/Responsive_Web_Design/Technical_Documentation_Page/index.html",
        style: "--clr:#263773",
        text: "Technical Documentation Page"
      },
      {
        num: 19,
        link: "FreeCodeCamp/Responsive_Web_Design/Product_Landing_Page/index.html",
        style: "--clr:#BC13FE",
        text: "Product Landing Page"
      },
      {
        num: 20,
        link: "FreeCodeCamp/Responsive_Web_Design/Personal_Portfolio_Webpage/index.html",
        style: "--clr:#5f7170",
        text: "Personal Portfolio Webpage"
      }, 
      {
        num: 21,
        link: "FreeCodeCamp/JavaScript_Algorithms_and_Data_Structures/Palindrome_Checker/index.html",
        style: "--clr:#0dff9f",
        text: "Palindrome Checker"
      },
      {
        num: 22,
        link: "FreeCodeCamp/JavaScript_Algorithms_and_Data_Structures/Roman_Numeral_Converter/index.html",
        style: "--clr:#d19fe3",
        text: "Roman Numeral Converter"
      },
      {
        num: 23,
        link: "FreeCodeCamp/JavaScript_Algorithms_and_Data_Structures/Caesars_Cipher/index.html",
        style: "--clr:#263773",
        text: "Caesars Cipher"
      },
      {
        num: 24,
        link: "FreeCodeCamp/JavaScript_Algorithms_and_Data_Structures/Telephone_Number_Validator/index.html",
        style: "--clr:#FF5E00",
        text: "Telephone Number Validator"
      },
      {
        num: 25,
        link: "FreeCodeCamp/JavaScript_Algorithms_and_Data_Structures/Cash_Register/index.html",
        style: "--clr:#ffff",
        text: "Cash Register"
      },
      {    
      num: 26,
      link: "Book_Studies/3_Learning_React_A_Hands-On_Guide/First_Application/index.html",
      style: "--clr:#7FFF00",
      text: "First_Application"
    },
    {
      num: 27,
      link: "Book_Studies/3_Learning_React_A_Hands-On_Guide/Components_React/index.html",
      style: "--clr:#FFFFFF",
      text: "Components React"
    },
    {
      num: 28,
      link: "Book_Studies/3_Learning_React_A_Hands-On_Guide/Styles_in_React/index.html",
      style: "--clr:#47cc0e",
      text: "Styles in React"
    },
    {
      num: 29,
      link: "Book_Studies/3_Learning_React_A_Hands-On_Guide/Color_Palette_Card/index.html",
      style: "--clr:#87a3a0",
      text: "Color Palette Card"
    } ,
    {
      num: 30,
      link: "Book_Studies/3_Learning_React_A_Hands-On_Guide/Lightning_Counter/index.html",
      style: "--clr:#FF5E00",
      text: "Lightning Counter"
    },
    {
      num: 31,
      link: "Book_Studies/3_Learning_React_A_Hands-On_Guide/Clicker/index.html",
      style: "--clr:#1436bc",
      text: "Clicker"
    },
    {
      num: 32,
      link: "Book_Studies/3_Learning_React_A_Hands-On_Guide/Palette/index.html",
      style: "--clr:#7FFF00",
      text: "Pallete"
    },
    {
      num: 33,
      link: "Book_Studies/3_Learning_React_A_Hands-On_Guide/hellospooky/build/index.html",
      style: "--clr:#ed32ff",
      text: "Hello Spooky"
    },
    {
      num: 34,
      link: "Book_Studies/3_Learning_React_A_Hands-On_Guide/ipaddress/build/index.html",
      style: "--clr:#ECF0F1",
      text: "IP-Address"
    },
    {
      num: 35,
      link: "Book_Studies/3_Learning_React_A_Hands-On_Guide/todolistnew/public/index.html",
      style: "--clr:#FFF01F",
      text: "todolist"
    },
    {
      num: 36,
      link: "Book_Studies/3_Learning_React_A_Hands-On_Guide/slidemenu/public/index.html",
      style: "--clr:#1436bc",
      text: "SlideMenu"
    }
    
    ];
  
    let buttonsHTML = '';
    buttons.forEach(button => {
      if (button.num === num) {
        buttonsHTML += `
            <a href="${button.link}">
                <button style="${button.style}"><span>${button.text}</span><i></i></button>
            </a>`;
      }
    });
    document.write(buttonsHTML);
  }
  
  

let buttonСolors = ["#FF3131", "#FFF01F", "#FF44CC", "#F1FF30", "#ECF0F1", "#9B59B6", "#8E44AD", "#2ECC71", "#1ABC9C", "#3498DB", "#F39C12", "39FF14", "FFF01F", "EA00FF"];
let buttonСolors2 = ["#BC13FE", "#7FFF00", "#FFFFFF", "#FFF01F", "#7FFF00", "#E7324F", "#FFF01F", "#FF3131", "#8A2BE2", "#FFFFFF", "#E7324F", "#FF44CC", "#F1FF30", "#ECF0F1", "#9B59B6"];
var buttonСolors3 = ["#141226", "#87a3a0", "#c66d94", "#1436bc", "#FFF01F", "#ed32ff", "#4f0f2a", "#211a16", "#938b3f", "#47cc0e", "#8c7b7f", "#8645e8", "#b7bca7", "#7FFF00","#BC13FE", "#7FFF00", "#FFFFFF", "#FFF01F", "#7FFF00", "#E7324F", "#FFF01F", "#FF3131", "#8A2BE2", "#FFFFFF", "#E7324F", "#FF44CC", "#F1FF30", "#ECF0F1", "#9B59B6"];