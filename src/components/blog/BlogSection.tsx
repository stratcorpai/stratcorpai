import { motion } from "framer-motion";
import { FileText, ExternalLink, Users, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getBlogPosts, openPDF } from "@/utils/blogUtils";
const BlogSection = () => {
  const blogPosts = getBlogPosts();
  const featuredPost = blogPosts.find(post => post.isFeatured);
  const pillarPosts = blogPosts.filter(post => !post.isFeatured);
  const handleReadArticle = (pdfUrl: string) => {
    openPDF(pdfUrl);
  };
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    });
  };
  return <section id="ai-governance" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-stratified/5 to-transparent"></div>
      
      <div className="container-custom relative">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            AI Governance for Boards
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
            From Oversight to Foresight
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Strategic insights and frameworks for boards navigating the complexities of AI governance, 
            regulatory compliance, and digital transformation in the modern business landscape.
          </p>
        </motion.div>

        {/* Featured Blog Post */}
        {featuredPost && <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} viewport={{
        once: true
      }} className="mb-16">
            <Card className="card-modern hover:shadow-xl transition-all duration-300 group cursor-pointer bg-gradient-to-br from-white to-gray-50" onClick={() => handleReadArticle(featuredPost.pdfUrl)}>
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-stratified/10 rounded-lg">
                      <FileText className="h-8 w-8 text-stratified group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <span className="text-sm text-stratified font-medium">Featured Article</span>
                    </div>
                  </div>
                  <ExternalLink className="h-6 w-6 text-gray-400 group-hover:text-stratified transition-colors duration-300" />
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold group-hover:text-stratified transition-colors duration-300 mb-3">
                  {featuredPost.title}
                </CardTitle>
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                  <span>{formatDate(featuredPost.publishDate)}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  {featuredPost.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featuredPost.tags?.map((tag, index) => <span key={index} className="text-sm bg-stratified/10 text-stratified px-3 py-1 rounded-full">
                      {tag}
                    </span>)}
                </div>
              </CardHeader>
              <CardContent>
                <Button size="lg" className="bg-stratified hover:bg-stratified-dark text-white group-hover:shadow-lg transition-all duration-300" onClick={e => {
              e.stopPropagation();
              handleReadArticle(featuredPost.pdfUrl);
            }}>
                  Read Featured Article
                </Button>
              </CardContent>
            </Card>
          </motion.div>}

        {/* Three Pillars */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} viewport={{
        once: true
      }} className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">Capacity, Geopolitics, Sustainability</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {pillarPosts.map((post, index) => <motion.div key={post.id} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} viewport={{
            once: true
          }}>
                <Card className="h-full card-modern hover:shadow-xl transition-all duration-300 group cursor-pointer" onClick={() => handleReadArticle(post.pdfUrl)}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <FileText className="h-8 w-8 text-stratified group-hover:scale-110 transition-transform duration-300" />
                      <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-stratified transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-lg font-semibold group-hover:text-stratified transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span>{formatDate(post.publishDate)}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3 text-sm">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags?.slice(0, 2).map((tag, index) => <span key={index} className="text-xs bg-stratified/10 text-stratified px-2 py-1 rounded-full">
                          {tag}
                        </span>)}
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-stratified group-hover:text-white group-hover:border-stratified transition-all duration-300" onClick={e => {
                  e.stopPropagation();
                  handleReadArticle(post.pdfUrl);
                }}>
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </motion.div>

        {/* Partnership Program Section */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} viewport={{
        once: true
      }} className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-stratified/10 rounded-lg">
                  <Handshake className="h-6 w-6 text-stratified" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Partnership Program</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Join our exclusive partnership network to deliver world-class AI governance 
                solutions to boards worldwide. We're seeking strategic partners who share 
                our commitment to responsible AI implementation and board excellence.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-stratified rounded-full"></div>
                  <span className="text-gray-700">Co-branded thought leadership content</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-stratified rounded-full"></div>
                  <span className="text-gray-700">Joint program delivery and consulting</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-stratified rounded-full"></div>
                  <span className="text-gray-700">Access to proprietary assessment frameworks</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="p-6 bg-gradient-to-br from-stratified/10 to-stratified/5 rounded-xl mb-6">
                <Users className="h-16 w-16 text-stratified mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Ready to Partner?</h4>
                <p className="text-gray-600 mb-4">
                  Transform how boards approach AI governance together
                </p>
              </div>
              <Button size="lg" className="bg-stratified hover:bg-stratified-dark text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                Explore Partnership
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default BlogSection;