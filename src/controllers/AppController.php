<?php

class AppController {

    protected function render(string $template = null, array $variables = [])
    {
        $templatePath = 'html/'. $template.'.html';
        $output = 'File not found';
                
        if(file_exists($templatePath)){
            extract($variables);
            
            ob_start();
            include $templatePath;
            $output = ob_get_clean();
        }
        print $output;
    }
}