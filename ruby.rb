File.open("Oppskrifter/rundstykkerSpelt.txt", "r") do |file|
    file.each_line do |line|
      if line 
        puts "hei"
      else 
        puts line
      end 
    
    end
  end