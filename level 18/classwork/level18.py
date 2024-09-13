#True and True მიაწვდება True
#True or True მიაწვდება True.
#False or False მიაწვდება False.
#საბოლოოდ: #True and False მიაწვდება False.
პასუხი: False

#print((True and False) or (False and True))

#True and False მიაწვდება False.
#False and True მიაწვდება False.
#საბოლოოდ: False or False მიაწვდება False.
#პასუხი: False

print((False and True) or (False and False))

#False and True მიაწვდება False.
#False and False მიაწვდება False.
#საბოლოოდ: False or False მიაწვდება False.
#პასუხი: False

print((True or False) and (False or bool(789)))

#bool(789) მიაწვდება True (რადგან ნებისმიერი არ-zero რიცხვი მიაწვდება True).
#True or False მიაწვდება True.
#False or True მიაწვდება True.
#საბოლოოდ: True and True მიაწვდება True.
#პასუხი: True

print((False and True) or (True and False))

#იგივე გამოხატვა, რაც მეორე:
#False and True მიაწვდება False.
#True and False მიაწვდება False.
#საბოლოოდ: False or False მიაწვდება False.
პასუხი: False

print((True or False) and (True and True))

#True or False მიაწვდება True.
#True and True მიაწვდება True.
#საბოლოოდ: True and True მიაწვდება True.
#პასუხი: True