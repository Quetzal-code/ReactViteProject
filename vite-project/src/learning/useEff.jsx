useEffect(() => { 
    document.title = `Little Lemon, v${version}`;
  }, [version]); // Only re-run the effect if version changes 