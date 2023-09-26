let inputStr
        let inputvalSplit
        let arr = []
        
     let input = document.querySelector('input')
     let button = document.querySelector('button')
     let para = document.querySelector('.para')
        button.onclick = ()=>{
            inputStr = input.value
              inputvalSplit = inputStr.split(' ')
            console.log(inputvalSplit)
            console.log(inputvalSplit[0].length)
            Printvalue()
            input.value = ''
        }
        let i=0 
        let j =0
        function Printvalue(){
           let    interval  = setInterval(()=>{
               if(i < inputvalSplit.length  ){
                          if(j< inputvalSplit[i].length)
                       {
                   arr.push(inputvalSplit[i][j])
                        console.log(arr)
                        para.innerHTML += inputvalSplit[i][j]
                       j++
                    }
                     else{
                        // if(''){}      
                        para.innerHTML = ''
                        i++
                        j=0
                     }   

                    }  
                    else{ clearInterval(interval)}
                    // i++
                },500)
        }