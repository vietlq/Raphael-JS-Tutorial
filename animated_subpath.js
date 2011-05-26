window.onload = function() {
    var paper = Raphael('raphael_canvas', 500, 500);
    var full_path = paper.path("M200,100c0,50,80-50,80,0c0,50-80-50-80,0z");
    var sub_path = null;
    var start_point = 0, end_point = 0, full_length = 0, incr = 20, run_length = 60;
    
    full_path.attr({'stroke-width': 5, stroke: '#333', opacity: 0.7, scale: 3});
    full_length = full_path.getTotalLength();
    full_length = Math.ceil(full_length);
    
    window.setInterval(function() {
        if(sub_path) sub_path.remove();
        
        start_point = (start_point + incr) % full_length;
        end_point = (start_point + run_length) % full_length;
        
        sub_path = full_path.getSubpath(start_point, end_point);
        sub_path = paper.path(sub_path);
        sub_path.attr({'stroke-width': 5, stroke: '#5fe736', opacity: 0.7});
    }, 50);
};
