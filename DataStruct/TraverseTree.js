var collectAllNodes = function(root){
    var nodes = [];

    var children = root.getChildren();
    nodes = nodes.concat(children);

    _.each(children, function(child){
        nodes = nodes.concat(collectAllNodes(child));
    });

    return nodes;
};

/*
basically you want to get this structure
_.each(children, function(child) {
   children = child.getChildren();
   nodes.push.apply(nodes, children);

   _.each(children, function(child) {
      children = child.getChildren();
      nodes.push.apply(nodes, children);

      _.each(children, function(child) {
         children = child.getChildren();
         nodes.push.apply(nodes, children);

         _.each(children, function(child) {
            children = child.getChildren();
            nodes.push.apply(nodes, children);

         });

      });

   });

});
*/
