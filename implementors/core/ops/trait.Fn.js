(function() {var implementors = {};
implementors["libc"] = [];implementors["mio"] = [];implementors["serde"] = [];implementors["hyper"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()