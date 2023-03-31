  
  const converter=()=>{
    var in_val=document.querySelector("#in_val").value;
    var in_unit=document.querySelector("#in_unit").value;
    var out_val=document.querySelector("#out_val");
    var out_unit=document.querySelector("#out_unit").value;
    //meter and centimeter 
     if(in_unit=="Meter" && out_unit=="Centimeter")
       {
      let output_val=in_val*100;
      out_val.value=output_val;
  }  
//centimeter and meter 
 else if(in_unit=="Centimeter" && out_unit=="Meter")
{
    let output_val=in_val/100;
    out_val.value=output_val;
}

else if(in_unit=="Kilometer" && out_unit=="Meter")
  {
    let output_val=in_val*1000;
    out_val.value=output_val;
}
else if(in_unit=="Meter" && out_unit=="Kilometer")
  {
    let output_val=in_val/1000;
    out_val.value=output_val;
}

else if(in_unit=="Kilometer" && out_unit=="Centimeter")
{
  let output_val=in_val*100000;
  out_val.value=output_val;
}
else if(in_unit=="Centimeter" && out_unit=="Kilometer")
{
  let output_val=in_val/100000;
  out_val.value=output_val;
}

else if(in_unit=="Kilometer" && out_unit=="Meter")
  {
    let output_val=in_val*1000;
    out_val.value=output_val;
}
else if(in_unit=="Meter" && out_unit=="Kilometer")
  {
    let output_val=in_val/1000;
    out_val.value=output_val;
  }

  else if(in_unit=="Kilometer" && out_unit=="Micrometer")
  {
    let output_val=in_val*1000000000;
    out_val.value=output_val;
}
else if(in_unit=="Micrometer" && out_unit=="Kilometer")
{
    let output_val=in_val/1000000000;
    out_val.value=output_val;
}

  else if(in_unit=="Centimeter" && out_unit=="Micrometer")
  {
    let output_val=in_val*10000;
    out_val.value=output_val;
}
else if(in_unit=="Micrometer" && out_unit=="Centimeter")
  {
    let output_val=in_val/10000;
    out_val.value=output_val;
}

  else if(in_unit=="Meter" && out_unit=="Micrometer")
  {
    let output_val=in_val*1000000;
    out_val.value=output_val;
}
else if(in_unit=="Micrometer" && out_unit=="Meter")
  {
    let output_val=in_val/1000000;
    out_val.value=output_val;
}

  else if(in_unit=="Kilometer" && out_unit=="Nanometer")
  {
    let output_val=in_val*1000000000000;
    out_val.value=output_val;
}
else if(in_unit=="Nanometer" && out_unit=="Kilometer")
  {
    let output_val=in_val/1000000000000;
    out_val.value=output_val;
}

  else if(in_unit=="Meter" && out_unit=="Nanometer")
  {
    let output_val=in_val*1000000000;
    out_val.value=output_val;
}
else if(in_unit=="Meter" && out_unit=="Nanometer")
  {
    let output_val=in_val/1000000000;
    out_val.value=output_val;
}

  else if(in_unit=="Centimeter" && out_unit=="Nanometer")
  {
    let output_val=in_val*10000000;
    out_val.value=output_val;
}
else if(in_unit=="Nanometer" && out_unit=="Centimeter")
  {
    let output_val=in_val/10000000;
    out_val.value=output_val;
}

else if(in_unit=="Kilometer" && out_unit=="Foot")
  {
    let output_val=in_val*3280.84;
    out_val.value=output_val;
}
else if(in_unit=="Foot" && out_unit=="Kilometer")
  {
    let output_val=in_val/3280.84;
    out_val.value=output_val;
}

else if(in_unit=="Meter" && out_unit=="Foot")
  {
    let output_val=in_val*3.280;
    out_val.value=output_val;
}
else if(in_unit=="Foot" && out_unit=="Meter")
  {
    let output_val=in_val/3.280;
    out_val.value=output_val;
}

else if(in_unit=="Centimeter" && out_unit=="Foot")
{
  let output_val=in_val/30.48;
  out_val.value=output_val;
}
else if(in_unit=="Foot" && out_unit=="Centimeter")
{
  let output_val=in_val*30.48;
  out_val.value=output_val;
}

else if(in_unit=="Kilometer" && out_unit=="Inch")
  {
    let output_val=in_val*39370;
    out_val.value=output_val;
}
else if(in_unit=="Inch" && out_unit=="Kilometer")
  {
    let output_val=in_val/39370;
    out_val.value=output_val;
}

else if(in_unit=="Meter" && out_unit=="Inch")
{
  let output_val=in_val*39.37;
  out_val.value=output_val;
}
else if(in_unit=="Inch" && out_unit=="Meter")
{
  let output_val=in_val/39.37;
  out_val.value=output_val;
}

else if(in_unit=="Centimeter" && out_unit=="Inch")
  {
    let output_val=in_val/2.54;
    out_val.value=output_val;
}
else if(in_unit=="Inch" && out_unit=="Centimeter")
  {
    let output_val=in_val*2.54;
    out_val.value=output_val;
}

else if(in_unit=="Kilometer" && out_unit=="Yard")
{
  let output_val=in_val*1094;
  out_val.value=output_val;
}
else if(in_unit=="Yard" && out_unit=="Kilometer")
{
  let output_val=in_val/1094;
  out_val.value=output_val;
}

else if(in_unit=="Kilometer" && out_unit=="Mile")
  {
    let output_val=in_val/1.609;
    out_val.value=output_val;
}
else if(in_unit=="Mile" && out_unit=="Kilometer")
  {
    let output_val=in_val*1.609;
    out_val.value=output_val;
}

else if(in_unit=="Foot" && out_unit=="Inch")
{
  let output_val=in_val*12;
  out_val.value=output_val;
}
else if(in_unit=="Inch" && out_unit=="Foot")
{
  let output_val=in_val/12;
  out_val.value=output_val;
}

else if(in_unit=="Inch" && out_unit=="Yard")
  {
    let output_val=in_val/36;
    out_val.value=output_val;
}
else if(in_unit=="Yard" && out_unit=="Inch")
{
    let output_val=in_val*36;
    out_val.value=output_val;
}
else if(in_unit=="Kilometer" && out_unit=="Milimeter")
{
  let output_val=in_val*1000000;
  out_val.value=output_val;
}
else if(in_unit=="Milimeter" && out_unit=="Kilometer")
{
  let output_val=in_val/1000000;
  out_val.value=output_val;
}
else if(in_unit=="Meter" && out_unit=="Milimeter")
  {
    let output_val=in_val*1000;
    out_val.value=output_val;
}
else if(in_unit=="Milimeter" && out_unit=="Meter")
  {
    let output_val=in_val/1000;
    out_val.value=output_val;
}
   
else if(in_unit=="Centimeter" && out_unit=="Milimeter")
  {
    let output_val=in_val*10;
    out_val.value=output_val;
}
else if(in_unit=="Milimeter" && out_unit=="Centimeter")
  {
    let output_val=in_val/10;
    out_val.value=output_val;
   }

}

  









  
  
  





  
