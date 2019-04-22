function calc() 
{
	var fname = document.getElementById('yname').value;
	var sname = document.getElementById('pname').value;
    if(fname=='' && sname=='')
    {
        document.getElementById('yname').style.border = '2px solid red';
        document.getElementById('pname').style.border = '2px solid red';
    }
	else if (fname=='') 
    {
		document.getElementById('yname').style.border = '2px solid red';
        document.getElementById('pname').style.border = '1px solid #ccc';
	}
	else if (sname=='') 
    {
		document.getElementById('pname').style.border = '2px solid red';
        document.getElementById('yname').style.border = '1px solid #ccc';
	}
    else if(fname === sname)
    {
        document.getElementById('msg').innerHTML = "Both the name should be different";
        document.getElementById('msg').style.color = 'red';
    }
    else
    {
        document.getElementById('yname').style.border = '1px solid #ccc';
        document.getElementById('pname').style.border = '1px solid #ccc';
        var res = getFlames(fname,sname);
        if(res=="F")
        {
                //res="FRIENDS";
                document.getElementById("msg").innerHTML = 'FRIENDS';
                document.getElementById("msg").style.color='blue';                  
        }
        else if(res=="L")
        {
                //res="LOVER";
                document.getElementById("msg").innerHTML = 'LOVER';
                document.getElementById("msg").style.color='#FF0080';
        }
        else if(res=="A")
        {
                //res="AFFECTION";
                document.getElementById("msg").innerHTML = 'AFFECTION';
                document.getElementById("msg").style.color='#DBA901';
        } 
        else if(res=="M")
        {
                //res="MARRIAGE";
                document.getElementById("msg").innerHTML = 'MARRIAGE';
                document.getElementById("msg").style.color='green';
        }
        else if(res=="E")
        {   
                    //res="ENEMY";
                    document.getElementById("msg").innerHTML = 'ENEMY';
                    document.getElementById("msg").style.color='red';
        }
        else if(res=="S")
        {
                //res="SIBLINGS";
                document.getElementById("msg").innerHTML = 'SIBLINGS';
                document.getElementById("msg").style.color='violet';
        }
    }
}

// calculation of FLAMES

function getFlames(fname,sname)
{
    var fname = (fname.replace(" ", "")).toUpperCase();
    var sname = (sname.replace(" ", "")).toUpperCase();

    // Erasing common character

    for (var i = 0; i < fname.length; i++) 
    {
        for(var j=0;j < sname.length; j++)
        {
            if(fname[i]==sname[j])
            {
                var a1 = fname.substring(0,i);
                var a2 = fname.substring(i+1,fname.length);
                fname = a1+a2;
                i=-1;
                var b1 = sname.substring(0,j);
                var b2 = sname.substring(j+1,sname.length);
                sname = b1+b2;
                j=-1;
                break;
            }
        }
    }

    // counting length of rest of the string
    var cnt = (fname+sname).length;
    var flames = new Array("F", "L", "A", "M", "E", "S");
    var stp = 1;
    for(var x=6; x>1; x--)
    {
        var g=((cnt%x)+stp)-1;
        if(g>x)
        {
                g=g%x;
        }
        if(g==0)
        {
                g=flames.length;
        }
        flames.splice(g-1,1);
        stp=g;
    }

    return flames;
}
      