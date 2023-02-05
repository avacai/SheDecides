
function getFormValue() {
    var FormValue = document.getElementsByTagName('input');
    var RadioValue = [];
    for (i = 0; i < FormValue.length; i++) {
        if (FormValue[i].type = "radio")
            if (FormValue[i].checked) {
                RadioValue.push(FormValue[i].value);
            }
    }
    var Name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var Q1 = RadioValue[0];
    var Q2 = RadioValue[1];
    var Q3 = RadioValue[2];
    var Q4 = RadioValue[3];
    var Q5 = RadioValue[4];
    var Q7 = RadioValue[5];
    var Q8 = RadioValue[6];
    var budget = document.getElementById("budget").value;

    var suggestion = "";
    var tam = 0, cup = 0, pad = 0, pants = 0;
    var light = 0, regular = 1, heavy = 0;

    if (Q1 == "1A") {
        tam++;
        cup++;
    }
    else {
        pad++;
        pants++;
        suggestion += "Menstrual cups/ tampons are considered embedded menstrual products and may cause vaginal discomfort especially with narrow vagina and virginity. ";
    }

    if (Q2 == "2B") {
        pants++;
        suggestion += "Period underwear can be worn ahead/ after of your period time without the need to be discarded before it come into actual use, protecting your cloth and sheets from unexpected blood flow. ";
    }

    if (Q3 == "3A") {
        cup++;
        tam++;
        suggestion += "Tampons and menstrual cups are the best choices if you want to get wet during menstrual period. Unlike other products, they absorb the blood and tissue before they come out, and have the ability to prevent infections caused by the water condition. ";
    }
    else if (Q3 == "3B") {
        pad--;
        suggestion += "Sanitary pads might be less stable than other products during your exercise and could cause leaking due to its displacement. If pads are preferred, use the ones with wings! ";
    }
    else if (Q3 == "3C") {
        heavy++;
        suggestion += "Bigger sized menstrual products might be needed during a long night of sleep, preventing your cloth and sheets from exceeding blood flow and unconsciously made displacement. ";
    }

    if (Q4 == "4A") {
        pad--;
        suggestion += "Sanitary pads may cause allergies due to their limited air permeability. "
    }
    else if (Q4 == "4B") {
        cup--;
        tam--;
        suggestion += "Inflammation and infection are life-threatening syndromes caused by invasion of bacteria into your body. If you have currently in the situation,  please avoid using embedded products to prevent further illnesses. "
    }

    //q5
    if (Q5 == "5A") {
        pad++;
        pants++;
        light++;
        suggestion += "The lack of lubricant caused by light menstrual flow may lead to discomfort if you are using tampons or menstrual cups. But if they are preferred, smaller sized products could be used to ease the symptom. ";
    }
    else if (Q5 == "5C") {
        heavy++;
        suggestion += "Strong menstrual flows may cause leaking and displacement after the regular products reach its absorbing limit. Bigger sized products with higher compatibility is the solution to your carefree period! ";

    }
    //q7
    if (Q7 == "7B") {
        cup--;
        tam--;
        suggestion += "Pregnancy could severely affect the health condition of your body. Please follow the doctors' instructions and avoid using risky products to stay away from infections and other disease. ";
    }
    else if (Q7 == "7C") {
        suggestion += "Pregnancy could severely affect the health condition of your body. Please follow the doctors' instructions and avoid using risky products to stay away from infections and other disease. ";
    }
    //q8
    if (Q8 == "8A") {
        cup--;
        tam--;
        suggestion += "After the implantation of vaginal ring, your risk of getting vaginal infections could slightly increase if you try to use embedded products. ";
    }
    else if (Q8 == "8B") {
        cup--;
        tam--;
        suggestion += "After the implantation of IUS/ IUD, your risk of getting vaginal infections could slightly increase if you try to use embedded products. ";
    }

    var flow="";
    if (regular>0)
        flow+="regular ";
    if (light>0)
        flow+="light";
    if (heavy>0)
        flow+="heavy";
    
    var types = [  { name: "tampon", value: tam },  { name: "menstrual cup", value: cup },  { name: "sanitary pad", value: pad },  { name: "menstrual pant", value: pants }];

    types.sort(function(a, b) {
    return b.value - a.value;});

    document.getElementById("info").innerHTML= "Name: "
    + Name + "<br>" + "Age: " + age;
    document.getElementById("recommendation").innerHTML= "Our recommendation for you: "+ "<br>" + types[0].name
    + " and " + types[1].name + ", in  size "+ flow;
    document.getElementById("suggestion").innerHTML= "Our suggestion: " + "<br>" +suggestion;

}

function scrolldiv1() {
    var Q7 = document.getElementById("Q7");
    Q7.scrollIntoView({ behavior: 'smooth' });
}
function scrolldiv2() {
    var Q8 = document.getElementById("Q8");
    Q8.scrollIntoView({ behavior: 'smooth' });
}