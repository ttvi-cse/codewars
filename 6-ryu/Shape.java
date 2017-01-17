public abstract class Shape implements Comparable<Shape> {
	public abstract double getSize();

	public int compareTo(Shape shape) {
		return this.getSize() < shape.getSize()? -1 : 1;
	}

	public static void main(String... args) {
		System.out.println("hello world");
	}
}

class Square extends Shape {
	private double side;

	Square(double side) {
		this.side = side;
	}

	public double getSize() {
		return side * side;
	}
}
class Rectangle extends Shape{
	private double width;
	private double height;

	Rectangle(double width, double height) {
		this.width = width;
		this.height = height;
	}

	public double getSize() {
		return width * height;
	}
}
class Triangle extends Shape{
	private double base;
	private double height;

	Triangle(double base, double height) {
		this.base = base;
		this.height = height;
	}

	public double getSize() {
		return base * height / 2;
	}
}
class Circle extends Shape {
	private double radius;

	Circle(double radius) {
		this.radius = radius;
	}

	public double getSize() {
		return radius * radius * Math.PI;
	}
}
class CustomShape extends Shape {
	private double area;

	CustomShape(double area) {
		this.area = area;
	}

	public double getSize() {
		return area;
	}
}