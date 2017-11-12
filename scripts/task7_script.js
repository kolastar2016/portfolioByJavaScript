year7.oninput=function(){
	var year7=document.getElementById("year7");
	var year_task7=document.getElementById("year_task7_write");
	var len=year7.value.trim().length;
	var year_value=parseFloat(year7.value);
	if((!isNaN(year_value)) && (year_value>=1912 && year_value<=2019)){
		if(year_value==1912 || year_value==1924 || year_value==1936 || year_value==1948 || year_value==1960 || year_value==1972 || year_value==1984 || year_value==1996 || year_value==2008){
			year_task7.innerHTML="Ваш знак зодиака по Китайскому гороскопу 'Крыса'";
		} else if(year_value==1913 || year_value==1925 || year_value==1937 || year_value==1949 || year_value==1961 || year_value==1973 || year_value==1985 || year_value==1997 || year_value==2009){
			year_task7.innerHTML="Ваш знак зодиака по Китайскому гороскопу 'Бык'";
		} else if(year_value==1914 || year_value==1926 || year_value==1938 || year_value==1950 || year_value==1962 || year_value==1974 || year_value==1986 || year_value==1998 || year_value==2010){
			year_task7.innerHTML="Ваш знак зодиака по Китайскому гороскопу 'Тигр'";
		} else if(year_value==1915 || year_value==1927 || year_value==1939 || year_value==1951 || year_value==1963 || year_value==1975 || year_value==1987 || year_value==1999 || year_value==2011){
			year_task7.innerHTML="Ваш знак зодиака по Китайскому гороскопу 'Кролик'";
		} else if(year_value==1916 || year_value==1928 || year_value==1940 || year_value==1952 || year_value==1964 || year_value==1976 || year_value==1988 || year_value==2000 || year_value==2012){
			year_task7.innerHTML="Ваш знак зодиака по Китайскому гороскопу 'Дракон'";
		} else if(year_value==1917 || year_value==1929 || year_value==1941 || year_value==1953 || year_value==1965 || year_value==1977 || year_value==1989 || year_value==2001 || year_value==2013){
			year_task7.innerHTML="Ваш знак зодиака по Китайскому гороскопу 'Змея'";
		} else if(year_value==1918 || year_value==1930 || year_value==1942 || year_value==1954 || year_value==1966 || year_value==1978 || year_value==1990 || year_value==2002 || year_value==2014){
			year_task7.innerHTML="Ваш знак зодиака по Китайскому гороскопу 'Лошадь'";
		} else if(year_value==1919 || year_value==1931 || year_value==1943 || year_value==1955 || year_value==1967 || year_value==1979 || year_value==1991 || year_value==2003 || year_value==2015){
			year_task7.innerHTML="Ваш знак зодиака по Китайскому гороскопу 'Коза'";
		} else if(year_value==1920 || year_value==1932 || year_value==1944 || year_value==1956 || year_value==1968 || year_value==1980 || year_value==1992 || year_value==2004 || year_value==2016){
			year_task7.innerHTML="Ваш знак зодиака по Китайскому гороскопу 'Обезьяна'";
		} else if(year_value==1921 || year_value==1933 || year_value==1945 || year_value==1957 || year_value==1969 || year_value==1981 || year_value==1993 || year_value==2005 || year_value==2017){
			year_task7.innerHTML="Ваш знак зодиака по Китайскому гороскопу 'Петух'";
		} else if(year_value==1922 || year_value==1934 || year_value==1946 || year_value==1958 || year_value==1970 || year_value==1982 || year_value==1994 || year_value==2006 || year_value==2018){
			year_task7.innerHTML="Ваш знак зодиака по Китайскому гороскопу 'Собака'";
		} else if(year_value==1923 || year_value==1935 || year_value==1947 || year_value==1959 || year_value==1971 || year_value==1983 || year_value==1995 || year_value==2007 || year_value==2019){
			year_task7.innerHTML="Ваш знак зодиака по Китайскому гороскопу 'Свинья'";
		}
	}else{
		year_task7.innerHTML=" Нет такого года попробуйте выбрать с 1912 по 2019)";
	}
	if (len==0){
		year_task7.innerHTML="";
	}
}