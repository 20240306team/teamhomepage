const $calculator = document.querySelector('.calculator');
let $month = document.querySelector('.form-select');
let $absent = document.querySelector('.form-control');


let $modalBody = document.querySelector('.modal-body');
const $modal = document.querySelector('#staticBackdrop');
$modal.addEventListener('show.bs.modal',e=>{
    let monthValue = $month.value;
    let absentValue = $absent.value;
    let unitday = 0;
    switch(monthValue){
        case '2' : 
            unitday = 21; 
            getMoney(absentValue,unitday);
            break;
        case '3' : 
            unitday = 20; 
            getMoney(absentValue,unitday);
            break;
        case '4' : 
            unitday = 21; 
            getMoney(absentValue,unitday);
            break;
        case '5' : 
            unitday = 19;
            getMoney(absentValue,unitday);
            break;
        case '6' : 
            unitday = 20;
            getMoney(absentValue,unitday);
            break;
        case '7' : 
            unitday = 21;
            getMoney(absentValue,unitday);
            break;
        case '8' :
            unitday = 10;
            getMoney(absentValue,unitday);
            break;
        default :
            $modalBody.textContent='몇월인지 선택해주세요'

    }
    function getMoney(absentValue,unitday){
        let canAbsent = parseInt(unitday*0.2)-absentValue;
        let payment = (unitday-absentValue)*15800;

        if(canAbsent>0){
            $modalBody.innerHTML=`당신의 결석가능횟수는 : ${canAbsent}일<br>남은 기간 전부 출석시 받을 지급액은 ${payment.toLocaleString()}원 입니다`;
        }
        else if(canAbsent==0){
            $modalBody.innerHTML=`더이상 결석하면 장려금지급이 없습니다<br>남은 기간 전부 출석시 받을 장려금은 ${payment.toLocaleString()}원 입니다`
        }
        else{
            $modalBody.innerHTML=`<img src="sample/nope.gif" style="height: 200px; width:200px;"><br>너무 많이 결석 했군요~~~ 이번달은 장려금을 받을 수 없습니다`;
        }

    };






})
