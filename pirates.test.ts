namespace $ {
	$mol_test( {
		'content render'($) {
				
			class $pirates_test extends $pirates {
				sub() {
					return [ 'lol' , 5 ]
				}
			}
			
			var x = new $pirates_test()
			x.$ = $
			
			var node = x.dom_tree()
			
			$mol_assert_equal( node.innerHTML , 'lol5' )
			
		} 
	
	} )
}
