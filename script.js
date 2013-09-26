var tpStopWatch= function(){
    var status = false,
    time = [[0],[0,0],[0,0],[0,0]];
    this.crun=function(){
        var output,
        hour = time[0],
        minute = time[1],
        second = time[2],
        msecond = time[3];
        if(status){
            msecond[1]++;
            if(msecond[1]>9){
                msecond[1]=0;
                msecond[0]++;
            }
            if(msecond[0]>9){
                msecond[0]=0;
                second[1]++;
            }
            if(second[1]>9){
                second[1]=0;
                second[0]++;
            }
            if(second[0]>5){
                second[0]=0;
                minute[1]++;
            }
            if(minute[1]>9){
                minute[1]=0;
                minute[0]++;
            }
            if(minute[0]>5){
                minute[0]=0;
                h[0]++;
            }
            if(hour[0]>23){
                msecond=[0,0];
                second=[0,0];
                msecond=[0,0];
                hour[0]=0;
            }
        }
        output = hour[0]+':'+minute[0]+minute[1]+':'+second[0]+second[1]+'.'+msecond[0]+msecond[1];
        var time_space = document.getElementById('time');
        time_space.innerHTML=output;
    };
    this.cstart=function(){
        status = true;
    };
    this.cstop = function(){
        status = false;
    };
    this.creset = function(){
        time = [[0],[0,0],[0,0],[0,0]];
        this.cstop();
        new tpStopWatch();
    }
   
};
var y = new tpStopWatch();
var $time;
	
(function runLoop(){
    y.crun();
    setTimeout(runLoop,1000/100);
})();
 
function start() {
    y.cstart();
}
 
function stop(){
    y.cstop();
}
function reset() {
    y.creset();
}