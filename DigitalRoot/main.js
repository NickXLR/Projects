function digital_root(num){
    if(num > 9){
        let a = num % 10;
        let b = Math.floor(num/10);
        return digital_root (a + digital_root(b));
    }else{
        return num;
    }
}