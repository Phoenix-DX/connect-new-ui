define("PluginManager", ["exports"], function(exports) { 

    var plugin = [];
    
    exports.createScope = function(pluginName, onReadyCallback, onDestroyCallback) {
        
        if (typeof(plugin[pluginName]) === "undefined") {
            plugin[pluginName] = {};
        }
        
        var currentScope = plugin[pluginName].activeScope;
        
        // Do we have an activeScope? We need to push it back so onDestroy picks it up
        if (typeof(currentScope) !== "undefined") {
            console.log("Pushing active scope back");
            plugin[pluginName].previousScope = currentScope;
            currentScope._isActive = false;
        }
        currentScope = {};
        currentScope._isActive = true;
        currentScope.newCallback = function(callback) {
            return function () {
                if (currentScope._isActive) {
                    return callback.apply(null, arguments);
                }
                console.log("Ignoring callback called on previous scope");
            };
        };
        currentScope._onReadyCallback = onReadyCallback;
        currentScope._onDestroyCallback = onDestroyCallback;
        plugin[pluginName].activeScope = currentScope;
        console.log("About to run _onReady");
        currentScope._onReadyCallback(currentScope);
    };

    exports.destroyScope = function(pluginName) {
        
        if (typeof(plugin[pluginName]) === "undefined") {
            return;
        }
        
        var currentScope = plugin[pluginName].previousScope;
        // if we don't have a previous scope, then let's destroy activeScope instead
        if (typeof(currentScope) === "undefined") {
            currentScope = plugin[pluginName].activeScope;
            plugin[pluginName].activeScope = undefined;
            console.log("About to run onDestroy for active scope");
        } 
        else {
            plugin[pluginName].previousScope = undefined;
            console.log("About to run onDestroy for previous scope");
        }
        
        if (currentScope) {
            currentScope._onDestroyCallback(currentScope);
        }
    };

    exports.scope = function(pluginName) {
        return plugin[pluginName].activeScope;
    };

});