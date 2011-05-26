window.onload = function() {
    var paper = Raphael('raphael_canvas', 500, 500);
    var full_path = paper.path("M200,100c0,50,80-50,80,0c0,50-80-50-80,0z");
    var red_ball = null;
    var red_point = null;
    var start_point = 0, incr = 15, full_length = 0;
    
    full_path.attr({'stroke-width': 5, stroke: '#333', opacity: 0.7, scale: 3});
    full_length = full_path.getTotalLength();
    full_length = Math.ceil(full_length);
    
    red_point = full_path.getPointAtLength(start_point);
    red_ball = paper.circle(red_point.x, red_point.y, 3);
    red_ball.attr({'stroke-width': 5, stroke: '#f33', opacity: 0});
    
    window.setInterval(function() {
        start_point = (start_point + incr) % full_length;
        
        red_point = full_path.getPointAtLength(start_point);
        red_ball.attr({cx: red_point.x, cy: red_point.y, opacity: 0.9});
    }, 50);
};
