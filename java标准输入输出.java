import java.util.Scanner;
 
public class Main{
 public static void main(String[] args){
  Scanner sc=new Scanner(System.in);
  while(sc.hasNext()){
  String s1=sc.nextLine();//输入第一个整数，此时输入的是字符串类型的
  int N=Integer.parseInt(s1);//将字符串类型转换为整数类型N
  
  String s2=sc.nextLine();//输入数组中的各个元素，元素以空格分开
  int[] n=new int[N];//定义数组n
  String[] ss=s2.split(" ");//按照空格切分输入数组中的各个元素
  for(int i=0;i<n.length;i++){//将数组中的元素添加到数组n中
  	n[i]=Integer.parseInt(ss[i]);
  }
  
  String s3=sc.nextLine();//输入第二个整数K，此时输入的是字符串类型
  int K=Integer.parseInt(s3);//将字符串类型转换为整数类型K
  }
 }
 public static int help(int num,int i){
        int sum = 0;
        while(num != 0){
            sum += num % i;
            num = num / i;
        }
        return sum;
    }
 
}