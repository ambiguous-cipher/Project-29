class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    
  }

  display(r, g, b){
    super.display();
    push();
    fill(r, g, b)
    pop();
  }


};
