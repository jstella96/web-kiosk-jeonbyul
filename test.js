/*
    n행 m열 
    
    query( 0,  dx)
    0은 열번호 증가
    1은 열번호 감소
    2는 행번호 증가
    3은 행번호 감소
    
    모든 좌표에서 시작할 수 있다!! 
    
    더할때 넘어가면 스톱해서 넘기자.


    어떻게 하면 효율성으로 풀지? 
    
    메모를 할 수가 없다. 
    
    
    [2,1]
    // 0 열(x)감소, 1 열(x)증가 2 행(y)감소 3 행(y)증가
    
    1. (0,0) 지점부터 
        2 / 1 : (0,0)  
        
        0 / 1 : (0,0)
        
        1 / 1 : (1,0)
        
        0 / 1 : (0,0)
        
        2 / 1 : (0,0)
        
        최종 : 0,0
    
    2. (0,1) 지점부터 
    
        2 / 1 : (0,0)  //여기서 위와 똑같아짐
        
        0 / 1 : (0,0)
        
        1 / 1 : (1,0)
        
        0 / 1 : (0,0)
        
        2 / 1 : (0,0)
        
    3. (1,0) 지점부터 
    
        2 / 1 : (1,0)  
        
        0 / 1 : (0,0) //여기서 위와똑같아짐  // 이런걸 메모해볼까. 
        
        1 / 1 : (1,0)
        
        0 / 1 : (0,0)
        
        2 / 1 : (0,0)
        
    4. (1,1) 지점부터 
    
        2 / 1 : (1,0)  
        
        0 / 1 : (0,0) //여기서 위와똑같아짐 
        
        1 / 1 : (1,0)
        
        0 / 1 : (0,0)
        
        2 / 1 : (0,0)    
*/

// 몇 번째 index에서 특정 지점을 지나치면 그건 0으로 간다! 
// 정답인 애가 지나온길을 알고 있어야 한다. 
//


let count = 0;
function solution(n, m, x, y, queries) {
    
    let candidate = [[0,0]] //행,열
    for(let i = queries-1; i >= 0 ; i--){
        const [type, num] = queries[i];
        const nextCandidate = [];
        
        let maxRow = n-1;
        let maxColumn = m-1;
        candidate.forEach( ( [row, column] )=> {
             if(type === 0){
                 if(column === 0){
                    for(let i = 0; i<=num; i++){
                      if(i>maxColumn) break;
                      nextCandidate.push([row,i])
                    }
                 }else{
                      const next = column+num > maxColumn ? maxColumn : column+num
                      nextCandidate.push([row, next])
                 }
             }
             else if(type === 1){
                 if(column === m-1){
                    for(let i = m-1; i>= m-1-num; i--){
                       if(i < 0) break;
                        nextCandidate.push([row,i])
                    }
                 }else{
                      const next = column-num < 0 ? 0 : column-num 
                      nextCandidate.push([row,next])
                 }
             }
             else if(type === 2){
                 if(row === 0){
                    for(let i = 0; i<=num; i++){
                      if(i>maxRow) break;
                         nextCandidate.push([i,column])
                    }
                 }else{
                      const next =  row+num > maxRow ? maxRow : row+num
                      nextCandidate.push([next,column])
                 }
               //  console.log(nextCandidate)
             }
             else if(type === 3){
                 if(row === n-1){
                    for(let i = n-1; i>=n-1-num; i--){
                         if(i < 0) break;
                      nextCandidate.push([i,column])
                    }
                 }else{
                      const next = row-num < 0 ? 0 : row-num 
                      nextCandidate.push([next,column])
                 }
             } 
         })
         candidate = [...nextCandidate]
      //  console.log(candidate )
    }
    console.log(candidate)

    return count;

}


