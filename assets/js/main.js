function betolt()
{
    var a = document.getElementById("tablazat")
    var s=""
    s="<table id=tabla>"
    for (var i=0;i<3;i++)
    {
        s+="<tr>"
        for (var j=0;j<3;j++)
        {
            s+="<td id='"+i+""+j+"' onclick=katt('"+i+""+j+"')></td>"
        }
        s+="</tr>"
    }
    s+="</table>"
    a.innerHTML=s
    var c= ['red','green','blue','yellow','white','orange']
    var rnd=Math.floor(Math.random()*6)
    for (var i=0;i<3;i++)
    {
        for (var j=0;j<3;j++)
        {
            document.getElementById(i+""+j).style.backgroundColor=c[rnd]
        }
    }
}

function reroll()
{
    var c= ['red','green','blue','yellow','white','orange']
    for (var i=0;i<3;i++)
    {
        for (var j=0;j<3;j++)
        {
            var rnd=Math.floor(Math.random()*6)
            document.getElementById(i+""+j).style.backgroundColor=c[rnd]
        }
    }
}

function katt(szam)
{
    var szin=document.getElementById(szam).style.backgroundColor
    for (var i=0;i<3;i++)
    {
        for (var j=0;j<3;j++)
        {
            document.getElementById(i+""+j).style.backgroundColor=szin
        }
    }
}