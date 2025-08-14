import Seo from "@/components/Seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const SizingGuide = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Sizing Guide | Canada Marketplace" 
        description="Find your perfect fit with our comprehensive sizing guide for clothing, shoes, and accessories." 
        canonical={window.location.href} 
      />
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Sizing Guide</h1>
            <p className="text-xl text-muted-foreground">
              Find your perfect fit with our comprehensive sizing charts
            </p>
          </div>

          <Tabs defaultValue="womens" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="womens">Women's</TabsTrigger>
              <TabsTrigger value="mens">Men's</TabsTrigger>
              <TabsTrigger value="shoes">Shoes</TabsTrigger>
              <TabsTrigger value="accessories">Accessories</TabsTrigger>
            </TabsList>

            <TabsContent value="womens" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Women's Clothing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">How to Measure</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li><strong>Bust:</strong> Measure around the fullest part of your bust</li>
                      <li><strong>Waist:</strong> Measure around your natural waistline</li>
                      <li><strong>Hips:</strong> Measure around the fullest part of your hips</li>
                    </ul>
                  </div>

                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Size</TableHead>
                        <TableHead>Bust (inches)</TableHead>
                        <TableHead>Waist (inches)</TableHead>
                        <TableHead>Hips (inches)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">XS</TableCell>
                        <TableCell>30-32</TableCell>
                        <TableCell>23-25</TableCell>
                        <TableCell>33-35</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">S</TableCell>
                        <TableCell>32-34</TableCell>
                        <TableCell>25-27</TableCell>
                        <TableCell>35-37</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">M</TableCell>
                        <TableCell>34-36</TableCell>
                        <TableCell>27-29</TableCell>
                        <TableCell>37-39</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">L</TableCell>
                        <TableCell>36-38</TableCell>
                        <TableCell>29-31</TableCell>
                        <TableCell>39-41</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">XL</TableCell>
                        <TableCell>38-40</TableCell>
                        <TableCell>31-33</TableCell>
                        <TableCell>41-43</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">XXL</TableCell>
                        <TableCell>40-42</TableCell>
                        <TableCell>33-35</TableCell>
                        <TableCell>43-45</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mens" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Men's Clothing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">How to Measure</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li><strong>Chest:</strong> Measure around the fullest part of your chest</li>
                      <li><strong>Waist:</strong> Measure around your natural waistline</li>
                      <li><strong>Neck:</strong> Measure around the base of your neck</li>
                    </ul>
                  </div>

                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Size</TableHead>
                        <TableHead>Chest (inches)</TableHead>
                        <TableHead>Waist (inches)</TableHead>
                        <TableHead>Neck (inches)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">XS</TableCell>
                        <TableCell>32-34</TableCell>
                        <TableCell>26-28</TableCell>
                        <TableCell>13-13.5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">S</TableCell>
                        <TableCell>34-36</TableCell>
                        <TableCell>28-30</TableCell>
                        <TableCell>14-14.5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">M</TableCell>
                        <TableCell>36-38</TableCell>
                        <TableCell>30-32</TableCell>
                        <TableCell>15-15.5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">L</TableCell>
                        <TableCell>38-40</TableCell>
                        <TableCell>32-34</TableCell>
                        <TableCell>16-16.5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">XL</TableCell>
                        <TableCell>40-42</TableCell>
                        <TableCell>34-36</TableCell>
                        <TableCell>17-17.5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">XXL</TableCell>
                        <TableCell>42-44</TableCell>
                        <TableCell>36-38</TableCell>
                        <TableCell>18-18.5</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="shoes" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Women's Shoes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>US Size</TableHead>
                          <TableHead>EU Size</TableHead>
                          <TableHead>UK Size</TableHead>
                          <TableHead>Length (cm)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>5</TableCell>
                          <TableCell>35</TableCell>
                          <TableCell>2.5</TableCell>
                          <TableCell>22.2</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>6</TableCell>
                          <TableCell>36</TableCell>
                          <TableCell>3.5</TableCell>
                          <TableCell>22.9</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>7</TableCell>
                          <TableCell>37</TableCell>
                          <TableCell>4.5</TableCell>
                          <TableCell>23.5</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>8</TableCell>
                          <TableCell>38</TableCell>
                          <TableCell>5.5</TableCell>
                          <TableCell>24.1</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>9</TableCell>
                          <TableCell>39</TableCell>
                          <TableCell>6.5</TableCell>
                          <TableCell>24.8</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>10</TableCell>
                          <TableCell>40</TableCell>
                          <TableCell>7.5</TableCell>
                          <TableCell>25.4</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Men's Shoes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>US Size</TableHead>
                          <TableHead>EU Size</TableHead>
                          <TableHead>UK Size</TableHead>
                          <TableHead>Length (cm)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>7</TableCell>
                          <TableCell>40</TableCell>
                          <TableCell>6</TableCell>
                          <TableCell>25.0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>8</TableCell>
                          <TableCell>41</TableCell>
                          <TableCell>7</TableCell>
                          <TableCell>25.7</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>9</TableCell>
                          <TableCell>42</TableCell>
                          <TableCell>8</TableCell>
                          <TableCell>26.3</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>10</TableCell>
                          <TableCell>43</TableCell>
                          <TableCell>9</TableCell>
                          <TableCell>27.0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>11</TableCell>
                          <TableCell>44</TableCell>
                          <TableCell>10</TableCell>
                          <TableCell>27.6</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>12</TableCell>
                          <TableCell>45</TableCell>
                          <TableCell>11</TableCell>
                          <TableCell>28.3</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="accessories" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Ring Sizes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>US Size</TableHead>
                          <TableHead>Diameter (mm)</TableHead>
                          <TableHead>Circumference (mm)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>5</TableCell>
                          <TableCell>15.7</TableCell>
                          <TableCell>49.3</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>6</TableCell>
                          <TableCell>16.5</TableCell>
                          <TableCell>51.9</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>7</TableCell>
                          <TableCell>17.3</TableCell>
                          <TableCell>54.4</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>8</TableCell>
                          <TableCell>18.1</TableCell>
                          <TableCell>57.0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>9</TableCell>
                          <TableCell>19.0</TableCell>
                          <TableCell>59.5</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Hat Sizes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Size</TableHead>
                          <TableHead>Head Circumference (cm)</TableHead>
                          <TableHead>Head Circumference (inches)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>XS</TableCell>
                          <TableCell>53-54</TableCell>
                          <TableCell>20.9-21.3</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>S</TableCell>
                          <TableCell>55-56</TableCell>
                          <TableCell>21.7-22.0</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>M</TableCell>
                          <TableCell>57-58</TableCell>
                          <TableCell>22.4-22.8</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>L</TableCell>
                          <TableCell>59-60</TableCell>
                          <TableCell>23.2-23.6</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>XL</TableCell>
                          <TableCell>61-62</TableCell>
                          <TableCell>24.0-24.4</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Sizing Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">General Guidelines</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Measure yourself in your undergarments for the most accurate fit</li>
                    <li>• Use a soft measuring tape and avoid pulling too tight</li>
                    <li>• When in doubt, size up for comfort</li>
                    <li>• Check individual product descriptions for specific sizing notes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Still Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    If you're unsure about sizing, our customer service team is here to help!
                  </p>
                  <a 
                    href="/contact" 
                    className="text-primary hover:underline text-sm"
                  >
                    Contact Support →
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SizingGuide;