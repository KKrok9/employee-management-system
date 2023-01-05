<?php
class A {
    public function foo() {
    return 'class A, method foo()';
    }
   }
   class B extends A{
    public function foo() {
    return 'class B, method foo() and parent: ' .
    parent::foo();
    }
   }
   $object = new B;
   echo $object->foo();

?>